// 제어 플래그를 탈출문으로 바꾸기
// 제어 플래그 boolean 값으로 판단하는 것이 아닌 언어에서 제공하는 break나 continue를 사용해라

for (const p of people) {
  if (p === "Don") {
    sendAlert();
    break;
  }
}
