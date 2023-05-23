class Transaction {
  #transactionAmount;
  #withdrawlOrDeposit;

  constructor(amount, type) {
    this.date = new Date().toLocaleDateString("en-GB")
    this.#transactionAmount = amount;
    this.resultingAmount;
    this.#withdrawlOrDeposit = type;
  }

  get amount() {
    return this.#transactionAmount;
  }

  get type() {
    return this.#withdrawlOrDeposit;
  }
} 

module.exports = Transaction;
