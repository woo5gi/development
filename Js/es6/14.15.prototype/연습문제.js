
//연습문제
// 오브젝트 자료 여러개
function Student(이름, 나이){
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function(){
    console.log('안녕 나는 ' + this.name + '이야');
  }
}

var 학생1 = new Student('Kim', 20);
var 학생2 = new Student('Park', 21);
var 학생3 = new Student('Lee', 22);


// 출력결과는? 30
function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.age = 30; // a의 부모 prototype에 age : 30 
console.log(a.age)

// 원인은?
function Student(이름, 나이){
  this.name = 이름;
  this.age = 나이;
}

Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
  }
var 학생1 = new Student('Kim', 20);

학생1.sayHi(); //왜 이 코드가 제대로 안나오
// arrow function은 this를 바깥에 있는 this를 그대로 사용하고 싶을 때 쓰는 함수
