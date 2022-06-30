function foundPerson(people = []) {
  // 찾고자 하는 것들은 배열에 담아두는 게 좋다
  const candidates = ["Don", "John", "Kent"];

  return people.find((p) => candidates.includes(p)) || "";
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));
