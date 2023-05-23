// const Balance = require('./balance');

class Account {
  constructor(balanceClass = Balance) {
      this.balance = new balanceClass();
  }
}

module.exports = Account;
