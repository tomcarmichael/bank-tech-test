class Statement {

  static print(transactions) {
    let statement = 'date || credit || debit || balance\n';
    transactions.reverse().forEach((transaction) => {
      statement += `${transaction.date} || `
      statement += (transaction.type === 'credit') ? `${transaction.amount}.00 || `: '|| '
      statement += (transaction.type === 'debit') ? `${transaction.amount}.00 || `: '|| '
      statement += `${transaction.resultingBalance}.00\n`
    });
    return statement;
  }
}

module.exports = Statement;
