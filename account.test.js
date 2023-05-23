const Account = require('./account');
const Balance = require('./balance');

jest.mock('./balance.js');

describe('Account class unit test', () => {
  beforeEach(() => {
    Balance.mockClear();
  });

  Balance.mockImplementation(() => {
    return {
      current: 0,
    };
  });

  it('initializes with a balance of 0',() => {
    const account = new Account(Balance);
    expect(account.balance.current).toEqual(0);
  });

  describe('deposit()', () => {
    it('allows the user to deposit 1000', () => {
      account = new Account(Balance);
      expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is 1000.00');
      expect(account.balance.current).toEqual(1000);
    });
  
    it('allows the user to deposit 500', () => {
      account = new Account(Balance);
      expect(account.deposit(500)).toEqual('Deposit successful, resulting balance is 500.00');
      expect(account.balance.current).toEqual(500);
    });
  
    it("doesn't allow the user to deposit 0", () => {
      account = new Account(Balance);
      expect(account.deposit(0)).toEqual('Deposit unsuccessful, cannot deposit 0');
      expect(account.balance.current).toEqual(0);
    });
  });

  describe('withdraw()', () => {
    it("doesn't allow the user to withdraw more than their balance", () => {
      account = new Account(Balance);
      account.deposit(300);
      expect(account.balance.current).toEqual(300);
      expect(account.withdraw(500)).toEqual('Insufficient funds. Your current balance is 300.00');
    });

    it("doesn't allow the user to withdraw before they have made a deposit", () => {
      account = new Account(Balance);
      expect(account.withdraw(5)).toEqual('Insufficient funds. Your current balance is 0.00');
    });

    it("allows the user to withdraw some money and updates their balance", () => {
      account = new Account(Balance);
      account.deposit(5000);
      expect(account.withdraw(500)).toEqual('Withdrawl successful, resulting balance is 4500.00');
      expect(account.balance.current).toEqual(4500);
    });
  });
});
