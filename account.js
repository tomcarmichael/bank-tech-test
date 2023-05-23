class Account {
  constructor(balanceClass = Balance) {
      this.balance = new balanceClass();
  }

  deposit(amount) {
    if (amount === 0) {
      return `Deposit unsuccessful, cannot deposit 0`;
    }
    this.balance.current += amount;
    return `Deposit successful, resulting balance is ${this.balance.current}.00`;
  }

  withdraw(amount) {
    this.balance.current -= amount;
    return `Deposit successful, resulting balance is ${this.balance.current}.00`;
  }
}

module.exports = Account;
