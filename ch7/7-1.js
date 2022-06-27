// 기존의 코드는 너무 쉽게 변경할 수 있음
// 불변성을 지키지 못해 side Effect가 발생할 가능성이 높다.
const organization = { name: "Acme Gooseberries", country: "GB" };

organization.name = "Dream Coding";

console.log(organization.name);
console.log(organization.country);
