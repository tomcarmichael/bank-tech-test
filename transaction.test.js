const Transaction = require('./transaction');

describe('Transaction unit test', () => { 
  it('Initializes with a date in UK short format', () => {
    const transaction = new Transaction(100, 'deposit');
    expect(transaction.date).toEqual(new Date().toLocaleDateString("en-GB"));
  });

  it('Does not let the user modify the amount after creation', () => {
    const transaction = new Transaction(100, 'deposit');
    transaction.amount = 1000;
    transaction.transactionAmount = 5000;
    expect(transaction.amount).toEqual(100);
  });

  it('Does not let the user modify the type after creation', () => {
    const transaction = new Transaction(100, 'withdrawl');
    transaction.type = 'deposit';
    expect(transaction.type).toEqual('withdrawl');
  });
});