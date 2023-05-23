const Account = require('./account');

describe('Bank account integration test', () => {
  it('allows the user to deposit money', () => {
    account = new Account();
    expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is £1000');
  });
});