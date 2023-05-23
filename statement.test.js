const Statement = require('./statement');

describe('Statement class unit test', () => {
  it('prints a statement of all transactions', () => {
    const transactions = [ 
      {
        date: '10/01/2023',
        amount: 1000,
        type: 'credit',
        resultingBalance: 1000
      },
      {
        date: '13/01/2023',
        amount: 2000,
        type: 'credit',
        resultingBalance: 3000
      },
      {
        date: '14/01/2023',
        amount: 500,
        type: 'debit',
        resultingBalance: 2500
      },
    ]

    const expectedStatement =
      "date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00\n"

    expect(Statement.printStatement(transactions)).toEqual(expectedStatement);
  });
});
