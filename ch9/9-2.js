// 필드 이름 바꾸기
// 정확하고 값을 잘 나타낼 수 있는 이름으로 지어라.
class Organization {
  #title;
  #country;
  constructor(data) {
    this.#title = data.title;
    this.#country = data.country;
  }
  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
}
const organization = new Organization({
  title: "박상훈 팬클럽",
  country: "대한민국",
});
