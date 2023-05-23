const Account = require('./account');
const Balance = require('./balance');

describe('Bank account integration test', () => {
  it('initializes with a balance of 0', () => {
    account = new Account(Balance);
    expect(account.balance.current).toEqual(0);
  });

  it('allows the user to deposit 1000', () => {
    account = new Account(Balance);
    expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is 1000.00');
    expect(account.balance.current).toEqual(1000);
  });

  it('allows the user to withdraw 500', () => {
    account = new Account(Balance);
    account.deposit(1000);
    expect(account.withdraw(500)).toEqual('Withdrawl successful, resulting balance is 500.00');
    expect(account.balance.current).toEqual(500);
  });

  it("allows the user to withdraw 1000 and updates their balance", () => {
    account = new Account(Balance);
    account.deposit(2000);
    expect(account.withdraw(1000)).toEqual('Withdrawl successful, resulting balance is 1000.00');
    expect(account.balance.current).toEqual(1000);
  });

  xit("Prints a statement of all transactions", () => {
    account = new Account(Balance);

    // global.Date = jest.fn(() => new Date('2023-01-10T12:00:00Z'));
    const mockDate = new Date('2023-01-10T12:00:00Z')
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)

    account.deposit(1000);
    spy.mockRestore()

    // global.Date = jest.fn(() => new Date('2023-01-13T12:00:00Z'));
    account.deposit(2000);

    // global.Date = jest.fn(() => new Date('2023-01-14T12:00:00Z'));
    account.withdraw(500);

    const expectedStatement =
      `date || credit || debit || balance\n
      14/01/2023 || || 500.00 || 2500.00\n
      13/01/2023 || 2000.00 || || 3000.00\n
      10/01/2023 || 1000.00 || || 1000.00\n`

    expect(account.printStatement).toEqual(expectedStatement);
  });
});
