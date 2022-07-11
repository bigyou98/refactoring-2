// 컴포지션(위임, 포함)
// 상속을 하지 않고 해당 하는 것을 주입을 해주는 것이다.
// 전달 받은 것을 사용하는 식
// 레고처럼 조합

class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log("기본적인 출력!");
  }
}

class RedPrinterHeader {
  print() {
    console.log("빨간 출력!");
  }
}

class BlackPrinterHeader {
  print() {
    console.log("검정 출력!");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];

printers.forEach((printer) => printer.print());
