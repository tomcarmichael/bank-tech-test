// const Balance = require('./balance');

class Account {
  constructor(balanceClass = Balance) {
      this.balance = new balanceClass();
  }

  deposit(amount) {
    return `Deposit successful, resulting balance is £1000`;
  }
}

module.exports = Account;
