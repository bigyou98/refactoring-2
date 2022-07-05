// 조건문 분해하기

function calculateCharge(date, quantity, plan) {
  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  const summerCharge = quantity * plan.summerRate;

  const regularCharge = quantity * plan.regularRate + plan.regularServiceCharge;

  return isSummer() ? summerCharge : regularCharge;
}
