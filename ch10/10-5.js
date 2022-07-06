// 특이 케이스 추가하기
// 특이한게 있다면 기존의 class를 상속해서 특이class로 만들어줘라
// null이라는 원시값을 사용하는 것이 아닌 null 객체를 만들어줘라

// 유지보수와 확장성이 향상됨
export class Site {
  #customer;

  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer === "unknown"
      ? new UnknownCustomer()
      : new Customer(this.#customer);
  }
}

export class Customer {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return "unknown";
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;

  let customerName;

  customerName = aCustomer.name;

  return customerName;
}
