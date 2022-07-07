// 매개변수를 질의 함수로 바꾸기

export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get finalPrice() {
    return this.discountedPrice(basePrice);
  }

  discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
