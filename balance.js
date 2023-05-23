class Balance {
  #currentBalance;

  constructor() { 
    this.#currentBalance = 0;
  }

  get current() {
    return this.#currentBalance;
  }

  set current(newBalance) {
    this.#currentBalance = newBalance;
  }
}

module.exports = Balance;
