// assert 추가하기
// 사용자를 위한게 아닌 개발자를 위함
// 실수를 알려주기 위함

// 배포할 때는 해당 내용을 지우고 해결해야 함!
import { strict as assert } from "node:assert";
class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    // number는 0보다 커야함
    assert(number >= 0);
    // 해당 조건이 false가 되면 앱 종료함
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(0);
new Customer().applyDiscount(-1);
