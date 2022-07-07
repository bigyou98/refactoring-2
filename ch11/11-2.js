// 함수 매개변수화 하기
// 공통된 로직은 뽑아내고 살짝 다른 부분은 매개변수로 전달해라!

// 예제 1
function raise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    band(usage, bottom) * 0.03 +
    band(usage, middle) * 0.05 +
    band(usage, top) * 0.07;
  return usd(amount);
}

function band(usage, type) {
  switch (type) {
    case "bottom":
      return Math.min(usage, 100);

    case "middle":
      return usage > 100 ? Math.min(usage, 200) - 100 : 0;

    case "top":
      return usage > 200 ? usage - 200 : 0;

    default:
      break;
  }
}

function usd(value) {
  return {
    currency: "$",
    currencyName: "USD",
    value: value,
  };
}
