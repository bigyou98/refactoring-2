import _ from "lodash";

// 변환함수보다는 클래스가 더 낫다.

const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
};

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  const result = _.cloneDeep(original);
  console.log(result);
}
