// 질의 함수와 변경 함수 분리하기

// 한가지 일만 해라~~!!!
// 예제 1
function totalOutstanding() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  return result;
}
function sendBill() {
  // bill을 보냄
}

// 예제 2
// 악당을 찾는 로직
// 알람을 보내는 로직
// 위 2가지 일을 1번에 처리하려고 한다.
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  const villain = ["Don", "John"];
  return people.find((p) => villain.includes(p));
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
