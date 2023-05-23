const Balance = require('./balance');
const Transaction = require('./transaction');
const Statement = require('./statement');

class Account {
  #transactionsArray;

  constructor(BalanceClass = Balance, TransactionClass = Transaction, StatementClass = Statement) {
    this.balance = new BalanceClass();
    this.TransactionClass = TransactionClass;
    this.StatementClass = StatementClass;
    this.#transactionsArray = [];
  }

  get transactions() {
    return this.#transactionsArray;
  }

  deposit(amount) {
    if (amount === 0) {
      return 'Deposit unsuccessful, cannot deposit 0';
    }
    this.balance.current += amount;
    const transaction = new this.TransactionClass(amount, 'credit', this.balance.current);
    this.#transactionsArray.push(transaction);
    return `Deposit successful, resulting balance is ${this.balance.current}.00`;
  }

  withdraw(amount) {
    if (amount > this.balance.current) {
      return `Insufficient funds. Your current balance is ${this.balance.current}.00`;
    }
    this.balance.current -= amount;
    const transaction = new this.TransactionClass(amount, 'debit', this.balance.current);
    this.#transactionsArray.push(transaction);
    return `Withdrawl successful, resulting balance is ${this.balance.current}.00`;
  }

  printStatement() {
    return this.StatementClass.print(this.transactions);
  }
}

module.exports = Account;
