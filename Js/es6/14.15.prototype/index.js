// prototype 은 유전자
function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요' + this.name + ' 입니다');
  }
}
//  prototype에 값을 추가하면 모든 자식들이 물려받기 가능
기계.prototype.gender = '남';

var 학생1 = new 기계('Park');
var 학생2 = new 기계('Kim');

// 1. 학생1이 직접 gender가지고 있는지
// 2.학생1의 부모유전자가 gender가지고있는지
학생1.gender;

console.log(학생1.gender);

//자바스크립트 내장함수 toString() 을 쓸 수 있는 이유 
var arr = [1,2,3];
console.log( arr.toString() ); //가능
// array에 arr.toString() 이렇게 붙일 수 있는 이유
// array의 부모 유전자가 toString()을 가지고 있기 때문

var arr = [1,2,3];
// new Array() => Array라는 기계로부터 자식을 하나 새로 뽑아주세요
var arr = new Array(1,2,3);
Array.prototype;
arr.sort();

console.log(Array.prototype);

//  prototype은 여러가지 특징
//  prototype은 constructor 함수에만 몰래 생성

// __proto__는 부모의 prototype
학생1.__proto__; //기계.prototype

//  __proto__를 직접 등록하면 object끼리 상속기능을 구현가능, 잘사용하지않음
var 부모 = { name : 'Kim' };
var 자식 = {};
자식.__proto__ = 부모;
자식.name;
console.log(자식.name);

// 실은 콘솔창에 prototype 정보들이 항상 출력됨

