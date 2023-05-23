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

  it('allows the user to deposit 1000', () => {
    account = new Account(Balance);
    expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is 1000');
  });

  it('allows the user to deposit 500', () => {
    account = new Account(Balance);
    expect(account.deposit(500)).toEqual('Deposit successful, resulting balance is 500');
  });

  it("doesn't allow the user to deposit 0", () => {
    account = new Account(Balance);
    expect(account.deposit(0)).toEqual('Deposit unsuccessful, cannot deposit 0');
  });

  it("doesn't allow the user to deposit 0", () => {
    account = new Account(Balance);
    expect(account.deposit(0)).toEqual('Deposit unsuccessful, cannot deposit 0');
  });
});


