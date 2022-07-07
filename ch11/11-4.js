// 객체 통째로 넘기기

// 인자로 data를 넘길때 어느정도 크기로 넘길까...
// 객체 자체를 줄수도 있고
// 객체의 2가지만 필요한데 객체 전체를 받을 필요는 없기에 인자로 2개만 받아온다.

export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
