// 1. 직접 class 구조 만들어보기
// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' }; 

class Dog {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
}
var 강아지1 = new Dog('똥개', 'black');

// 2. 이번엔 고양이관련 object들을 만들고 싶습니다.
// var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 

class Cat extends Dog {
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;
  }
}

var 고양이1 = new Cat('동네고양이', 'white', 5);


// 3. 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다. 
// a instanceof b 이렇게 쓰시면 a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자
class Dog1 {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
  한살먹기(){
    if( this instanceof Cat2) {
    this.age++
    }
  }
}

class Cat2 extends Dog1 {
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;
  }
}

// 4. get/set을 이용해봅시다
// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.
// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다. 

class Unit {
  constructor(){
    this.체력 = 100;
    this.공격력 = 5;
  }
  get battlePoint(){
    return this.체력 + this.공격력;
  }
  set heal(a){
    this.체력 = this.체력 + a; 
  }
};

var 쎈애 = new Unit();

console.log(쎈애.battlePoint);
쎈애.heal = 50;

// 5. get/set을 이용해봅시다2 

var data = {
  odd : [],
  even : [],
  setter함수 : function(...숫자들){
    숫자들.forEach((a)=>{
      if ( a % 2 == 1 ) {
        this.odd.push(a)  //홀수일때
      } else {
        this.even.push(a)  //짝수일때
      }
    });
  }
};

data.setter함수(1,2,3);
