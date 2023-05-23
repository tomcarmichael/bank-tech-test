const Account = require('./account');
const Balance = require('./balance');

describe('Bank account integration test', () => {
  it('initializes with a balance of 0', () => {
    account = new Account(Balance);
    expect(account.balance.current).toEqual(0);
  });


});