export class BookStore {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(customer, quantity, month, year) {
    this.#customer = customer;
    this.#quantity = quantity;
    this.#month = month;
    this.#year = year;
  }

  get reading() {
    return {
      customer: this.#customer,
      quantity: this.#quantity,
      month: this.#month,
      year: this.#year,
    };
  }

  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }
}
