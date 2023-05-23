const Transaction = require('./transaction');

describe('Transaction unit test', () => { 
  it('Initializes with a date in UK short format', () => {
    const transaction = new Transaction(100, 'credit');
    expect(transaction.date).toEqual(new Date().toLocaleDateString("en-GB"));
  });

  it('Returns the correct format date given a historic mock date', () => {
    const mockDate = new Date('1999-12-31T23:59:59Z')
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
    const transaction = new Transaction(100, 'credit');
    expect(transaction.date).toEqual('31/12/1999');
    spy.mockRestore()
  });

  it('Does not let the user modify the amount after creation', () => {
    const transaction = new Transaction(100, 'credit');
    transaction.amount = 1000;
    transaction.transactionAmount = 5000;
    expect(transaction.amount).toEqual(100);
  });

  it('Does not let the user modify the type after creation', () => {
    const transaction = new Transaction(100, 'debit');
    transaction.type = 'deposit';
    expect(transaction.type).toEqual('debit');
  });
});