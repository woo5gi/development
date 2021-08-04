// class를 상속한 class를 만들고 싶을 때 쓰는 extends

class 할아버지{
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi(){
    console.log('안녕 난 할아버지');
  }
}
var 할아버지1 = new 할아버지('만덕쓰')

console.log(할아버지1.이름)

// super() : 물려받는 class 의 constructor 라는 뜻
class 아버지 extends 할아버지{

  constructor(name){
    super(name);
    this.나이 = 50;
  }
  sayHi(){
    console.log('안녕 난 아버지');
    super.sayHi();// 안녕 난 할아버지
  }
}
var 아버지1 = new 아버지('만덕쓰')

console.log(아버지1.이름)
console.log(아버지1.sayHi())