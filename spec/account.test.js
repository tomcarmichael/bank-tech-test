const Account = require('../account');
const Balance = require('../balance');
const Transaction = require('../transaction')

jest.mock('../balance.js');
jest.mock('../transaction.js');

describe('Account class unit test', () => {
  beforeEach(() => {
    Balance.mockClear();
    Transaction.mockClear();

    Balance.mockImplementation(() => {    
      return {
        current: 0
      };
    });

    Transaction.mockImplementation((amount, type, resultingBalance) => {
      return {
        type: type,
        amount: amount,
        resultingBalance: resultingBalance
      }
    });
  });

  describe('constructor', () => {
    it('initializes with a balance of 0',() => {
      const account = new Account(Balance, Transaction);
      expect(account.balance.current).toEqual(0);
    });

    it('initializes with an empty array of transcations',() => {
      const account = new Account(Balance, Transaction);
      expect(account.transactions).toEqual([]);
    });
  });

  describe('deposit()', () => {
    it('allows the user to deposit 1000', () => {
      account = new Account(Balance, Transaction);
      expect(account.deposit(1000)).toEqual('Deposit successful, resulting balance is 1000.00');
      expect(account.balance.current).toEqual(1000);
    });
  
    it('allows the user to deposit 500', () => {
      account = new Account(Balance, Transaction);
      expect(account.deposit(500)).toEqual('Deposit successful, resulting balance is 500.00');
      expect(account.balance.current).toEqual(500);
    });
  
    it("doesn't allow the user to deposit 0", () => {
      account = new Account(Balance, Transaction);
      expect(account.deposit(0)).toEqual('Deposit unsuccessful, cannot deposit 0');
      expect(account.balance.current).toEqual(0);
    });

    it("adds deposits to the transactions array", () => {

      account = new Account(Balance, Transaction);
      account.deposit(2000);
      expect(account.transactions.length).toEqual(1);
      expect(account.transactions[0].type).toEqual('credit');
    });
  });

  describe('withdraw()', () => {
    it("doesn't allow the user to withdraw more than their balance", () => {
      account = new Account(Balance, Transaction);
      account.deposit(300);
      expect(account.balance.current).toEqual(300);
      expect(account.withdraw(500)).toEqual('Insufficient funds. Your current balance is 300.00');
    });

    it("doesn't allow the user to withdraw before they have made a deposit", () => {
      account = new Account(Balance, Transaction);
      expect(account.withdraw(5)).toEqual('Insufficient funds. Your current balance is 0.00');
    });

    it("allows the user to withdraw some money and updates their balance", () => {
      account = new Account(Balance, Transaction);
      account.deposit(5000);
      expect(account.withdraw(500)).toEqual('Withdrawl successful, resulting balance is 4500.00');
      expect(account.balance.current).toEqual(4500);
    });

    it("allows the user to withdraw 1000 and updates their balance", () => {
      account = new Account(Balance, Transaction);
      account.deposit(2000);
      expect(account.withdraw(1000)).toEqual('Withdrawl successful, resulting balance is 1000.00');
      expect(account.balance.current).toEqual(1000);
    });

    it("adds withdrawls to the transactions array", () => {
      account = new Account(Balance, Transaction);
      account.deposit(2000);
      account.withdraw(1000);
      expect(account.transactions.length).toEqual(2);
      expect(account.transactions[1].type).toEqual('debit');
    });
  });

  it('Assigns the resulting balance to a transaction', () => {
    account = new Account(Balance, Transaction);
    account.deposit(2000);
    account.withdraw(500);
    expect(account.transactions[0].resultingBalance).toEqual(2000);
    expect(account.transactions[1].resultingBalance).toEqual(1500);
  });
});
