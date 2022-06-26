// 클래스로 만들기

// 고민1 : product를 애초에 객체로 받아올지
// 일단 객체로 받아서 쓰자
class Order {
  #quantity;
  #product;
  #shippingMethod;
  constructor(product, quantity, shippingMethod) {
    this.#quantity = quantity;
    this.#product = product;
    this.#shippingMethod = shippingMethod;
  }

  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  get discount() {
    return (
      Math.max(this.#quantity - this.#product.discountThreshold, 0) *
      this.#product.basePrice *
      this.#product.discountRate
    );
  }

  get shippingPerCase() {
    return this.basePrice > this.#shippingMethod.discountThreshold
      ? this.#shippingMethod.discountedFee
      : this.#shippingMethod.feePerCase;
  }

  get shippingCost() {
    return this.#quantity * this.shippingPerCase;
  }

  get price() {
    return this.basePrice - this.discount + this.shippingCost;
  }
}

class Product {
  #basePrice;
  #discountRate;
  #discountThreshold;
  constructor(data) {
    this.#basePrice = data.basePrice;
    this.#discountRate = data.discountRate;
    this.#discountThreshold = data.discountThreshold;
  }
  get basePrice() {
    return this.#basePrice;
  }
  get discountRate() {
    return this.#discountRate;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }
}
class ShippingMethod {
  #discountThreshold;
  #feePerCase;
  #discountedFee;

  constructor(data) {
    this.#discountThreshold = data.discountThreshold;
    this.#feePerCase = data.feePerCase;
    this.#discountedFee = data.discountedFee;
  }

  get discountThreshold() {
    return this.#discountThreshold;
  }

  get feePerCase() {
    return this.#feePerCase;
  }

  get discountedFee() {
    return this.#discountedFee;
  }
}
// 사용 예:
const product = new Product({
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
});

const shippingMethod = new ShippingMethod({
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
});

const price = new Order(product, 5, shippingMethod);
console.log(price.price);
