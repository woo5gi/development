//var 학생1 = { name : 'Kim', age : 15 };

function 기계(){
  this.name = 'Kim';
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요' + this.name + ' 입니다');
  }
}
// 새로운 오브젝트 생성
var 학생1 = new 기계();
var 학생2 = new 기계();

학생1.sayHi();

// 기계=> Constructor
// this는 새로생성되는 오브젝트 => 인스턴스

// 이름을 다르게해주고싶을떈
function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요' + this.name + ' 입니다');
  }
}
var 학생1 = new 기계('Park');
var 학생2 = new 기계('Kim');

// 오브젝트로 여러개
function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);