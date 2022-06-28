class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice() {
    return this.#quantity * this.#item;
  }

  get discountFactor() {
    let discountFactor = 0.98;
    return this.basePrice > 1000 ? discountFactor : discountFactor - 0.03;
  }

  get price() {
    return this.basePrice * discountFactor;
  }
}

const qwe = new Order(300, 4);

console.log(qwe.basePrice);
console.log(qwe.price);
