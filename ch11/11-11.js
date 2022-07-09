// 수정된 값 반환하기
// 함수 내부에서 외부의 상태를 업데이트 하는 경우는 좋지 않다.
// 해당 값을 가지고 return 해주는 식으로 해야함!

export function ascentVelocity(points, totalMinutes) {
  function calculateAscent() {
    let result = 0;

    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }

    return result;
  }

  let totalAscent = calculateAscent([{ elevation: 10 }, { elevation: 20 }]);

  return totalAscent / totalMinutes;
}
