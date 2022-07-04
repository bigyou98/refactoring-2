// 9-3 파생변수를 질의 함수로 바꾸기

// 예제 1
// 기존의 코드는 다른 값도 같이 변경이 되어 SRP가 지켜지지 못함
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    // 해당 값을 사용할 때 필요한 계산이 되도록 해야한다.
    return this._basePrice - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this.adjustment.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
