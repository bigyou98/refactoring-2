export function readingsOutsideRange(readings, range) {
  return readings.filter(
    (item) => item.temp < range.min || item.temp > range.max
  );
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// 여기서 최소 최대값 변수명을 바꿀 것 같음
const operationPlan = {
  min: 51,
  max: 53,
};

readingsOutsideRange(station.readings, operationPlan);

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

// 최소값 최대값 데이터를 class로 만들기
export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  // 관련된 data와 관련된 일은 이 안에서 해야함
  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

export function readingsOutsideRange2(readings, range) {
  return readings.filter((r) => !range.contains(r.temp));
}

console.log(readingsOutsideRange2(station.readings, new NumberRange(51, 53)));
