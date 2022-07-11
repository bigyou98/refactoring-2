class Printer2 {
  private printerHeader: PrinterHeader;

  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrinterHeader();
  }
  print() {
    this.printerHeader.print();
  }
}

interface PrinterHeader {
  print(): void;
}

// PrinterHeader를 구현한 클래스이다.
class RedPrinterHeader2 implements PrinterHeader {
  print() {
    console.log("빨간 출력!");
  }
}

class BlackPrinterHeader2 implements PrinterHeader {
  print() {
    console.log("검정 출력!");
  }
}
class DefaultPrinterHeader implements PrinterHeader {
  print() {
    console.log("기본적인 출력!");
  }
}
