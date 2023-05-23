class Transaction {
  #transactionAmount;
  #withdrawlOrDeposit;
  #resultantBalance;

  constructor(amount, type, resultingBalance) {
    this.date = new Date().toLocaleDateString("en-GB")
    this.#transactionAmount = amount;
    this.#resultantBalance = resultingBalance;
    this.#withdrawlOrDeposit = type;
  }

  get amount() {
    return this.#transactionAmount;
  }
  
  get resultingBalance() {
    return this.#resultantBalance;
  }

  get type() {
    return this.#withdrawlOrDeposit;
  }
} 

module.exports = Transaction;
