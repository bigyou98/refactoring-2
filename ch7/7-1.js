// 기존의 코드는 너무 쉽게 변경할 수 있음
// 불변성을 지키지 못해 side Effect가 발생할 가능성이 높다.

// class로 생성해 맘대로 변경하지 못하게 하고 어떤 형식으로 생성하는 지 알 수 있다.

class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }
  get country() {
    return this.#country;
  }
}
const organization = new Organization("Acme Gooseberries", "GB");

// organization.name = "Dream Coding";

console.log(organization.name);
console.log(organization.country);
