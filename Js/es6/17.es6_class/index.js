// ES6 class 키워드로 구현하는 constructor
class 부모 {
  constructor(){
    this.name = 'Kim';
    // this.sayHi = function(){ console.log('hello') }
  }
  // 부모.prototype 에 추가됨
  sayHi(){ 
    console.log('hello') 
  }
}

var 자식 = new 부모();
console.log(자식.__proto__);

// 부모님 prototype을 출력
Object.getPrototypeOf(자식)

// prototype 내에 함수 여러개 추가하기

class 부모 {
  constructor(이름, 나이){
    this.name = 이름;
    this.age = 나이;
  }
  sayHi(){
    console.log('안녕');
  }
  sayHello(){
    console.log('안녕하세요');
  }
}

var 자식 = new 부모('Park');

// 객체지향 문법 쓰는 이유
// - Object 여러개 만들어 쓰려고 하는것