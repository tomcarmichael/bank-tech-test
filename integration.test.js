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
    expect (account.balance.current).toEqual(1000);
  });

  it('allows the user to withdraw 500', () => {
    account = new Account(Balance);
    account.deposit(1000);
    expect(account.withdraw(500)).toEqual('Deposit successful, resulting balance is 500.00');
    expect(account.balance.current).toEqual(500);
  });
});