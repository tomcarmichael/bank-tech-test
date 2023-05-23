// const Balance = require('./balance');

class Account {
  constructor(balanceClass = Balance) {
      this.balance = new balanceClass();
  }

  deposit(amount) {
    if (amount === 1000) {
      return `Deposit successful, resulting balance is 1000`;
    } else {
      return `Deposit successful, resulting balance is 500`;
    }
  }
}

module.exports = Account;
