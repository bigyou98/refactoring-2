// 명령을 함수로 바꾸기

// 계속 값을 갖고 있어야 한다면 프로퍼티로 만들어 두자
// 계속 값을 가질 필요가 없을 때는 함수로 만들자
export class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}
