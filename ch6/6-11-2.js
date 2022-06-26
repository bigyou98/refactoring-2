import fs from "fs";

// args는 실행할 파일
// run 함수를 만들어 테스트성을 높임
function run(args) {
  return countOrders(parseCommandLine(args));
}

function parseCommandLine(args) {
  if (!args) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${args}.json`;

  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  const countReadOnly = args.includes("-r");

  return {
    fileName,
    countReadOnly,
  };
}

function countOrders({ fileName, countReadOnly }) {
  const orders = JSON.parse(fs.readFileSync(fileName));
  // node 6-11-2 -r 옵션을 주면 ready인 상태만 간주한다.
  const filtered = countReadOnly
    ? orders.filter((order) => order.status === "ready")
    : orders;

  return filtered.length;
}

run(process.argv[2]);
