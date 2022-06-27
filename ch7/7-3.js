export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan("normal");
  }
}

class Priority {
  #value;
  constructor(value) {
    // 생성자 안에서 error를 던지는 것은 보안에 좋지 않다.
    if (!Priority.legalValues().includes(value))
      throw Error(`${value}는 범위 안에 없는 값입니다.`);
    this.value = value;
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }

  get value() {
    return this.#value;
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThan(other) {
    return this.index > other.index;
  }
}
