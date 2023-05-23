const Account = require('./account');
const Balance = require('./balance');

describe('Bank account integration test', () => {
  it('initializes with a balance of 0', () => {
    account = new Account(Balance);
    expect(account.balance.current).toEqual(0);
  });

  it('allows the user to deposit money', () => {
    account = new Account(Balance);
    expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is £1000');
  });
});