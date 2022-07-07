// 플래그 인수 제거하기
// true/false로 나뉠 거라면 차라리 2개로 각각 분리하는게 낫다.

// 예제 1
function setWidth(value){
  this._width = value;
}
function setHeight(value){
  this._height = value;
}

// 예제 2
class Concert {
  // isPremium으로 프리미엄인지 아닌지로 판단하는데 
  // 그냥 일반이랑 프리미엄 예약 각각 2개로 만들어줘라
  
  // 근데 내부 로직이 비슷하기 때문에 함수 2개로 나누는 것은 코드가 중복되는 것이 아닌가?
  // 외부에서 해당 함수를 사용할거라면 함수 2개로 나누는 것이 맞지만
  // 내부에서만 사용할 거라면 플래그로 만들어서 비공개로 내부에서만 처리되게끔 사용하면 된다.
  // private api이고 public으로 할것은 2개로 만들어라
  
  regularBook(customer) {}
  premiumBook(customer) {}
  #book(customer,isPremium){}
}

// 예제 3
function switchOn();
function switchOff();
