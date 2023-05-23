const Balance = require('./balance');
const Transaction = require('./transaction');

class Account {
  #transactionsArray;

  constructor(balanceClass = Balance, transactionClass = Transaction) {
      this.balance = new balanceClass();
      this.transactionClass = transactionClass;
      this.#transactionsArray = []
  }

  get transactions() {
    return this.#transactionsArray;
  }

  deposit(amount) {
    if (amount === 0) {
      return `Deposit unsuccessful, cannot deposit 0`;
    }
    this.balance.current += amount;
    this.#transactionsArray.push(new this.transactionClass(amount, 'credit'));
    return `Deposit successful, resulting balance is ${this.balance.current}.00`;
  }

  withdraw(amount) {
    if (amount > this.balance.current) {
      return `Insufficient funds. Your current balance is ${this.balance.current}.00`
    }
    this.balance.current -= amount;
    return `Withdrawl successful, resulting balance is ${this.balance.current}.00`;
  }
}

module.exports = Account;
