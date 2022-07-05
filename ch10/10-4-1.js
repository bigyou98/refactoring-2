// 조건부 로직을 다형성으로 바꾸기

// switch case를 남발하면 생기는문제점
// birds의 type이 추가가 된다면 switch를 일일이 찾아서 수정을 해줘야 한다

// 추상 클래스를 상속받아서 class를 구현하자
// 공통된 프로퍼티를 가진 class로 만드는게 좋을 지 생각을 해보고 해야한다.
class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  // 깃털 상태
  get plumage() {
    return "unknown";
  }

  // 비행 속도
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super("EuropeanSwallow");
  }
  get plumage() {
    return "average";
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super("AfricanSwallow");
  }
  get plumage() {
    return this.numberOfCoconuts > 2 ? "tired" : "average";
  }
  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super("NorwegianBlueParrot");
  }
  get plumage() {
    return this.voltage > 100 ? "scorched" : "beautiful";
  }
  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, b.plumage]));
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow()]);
console.log(result);
