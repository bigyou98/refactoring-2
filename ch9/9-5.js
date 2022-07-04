// 9-5 값을 참조로 바꾸기
// 불변성은 실수로 내가 여기저기서 값을 막 변경해도 상관이 없으니 좋다
// 하지만 내가 변경한 것이 다른 곳에서 업데이트가 되야한다면 참조 값을 갖는 것이 좋다.

// 고유한 id값을 사용하고 싶다면 repository 패턴을 사용하는 것이 좋다.
const customerRepository = new CustomerRepository();

const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
