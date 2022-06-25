let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}

// 방법 1 : 객체를 복사해서 반환해주기
// Object.assign(defaultOwner); {...defaultOwner}

// 방법 2 : 클래스로 만들어주기

// 내생각 : const로 만들기 : 틀림
// let이 아닌 const로 변경하면 수정이 안될거라 판단했는데
// object이기에 프로퍼티의 키를 바꾸는 건 안되지만 프로퍼티의 값을 바꾸는 건 가능하기에 실패
