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
});


