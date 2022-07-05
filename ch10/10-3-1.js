// 중첩 조건문을 보호 구문으로 바꾸기
// 중첩 조건문은 보기도 어렵고 더러워지고 유지보수하기도 어렵다

// 쉽게 결과가 도출될 수 있는 부분을 앞에 배치한다.
// 함수가 빨리 종료될 수 있도록 한다.
// 긴 작업은 뒤에 배치한다
export function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  }

  // 중요한 로직들
  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 999, reasonCode: "UNICORN" };
}
