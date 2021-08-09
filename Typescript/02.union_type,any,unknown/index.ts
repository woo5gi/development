// 가장 좋은 Union type 사용

// or 연산자
let 이름10: string | number = 'kim';
let 나이10: (string | number) = 100;

var 어레이: number[] = [1,2,3]
var 오브젝트: {data : number} = { data : 123 }

//any 타입 , 아무 자료나 집어넣을 수 있는 타입, 실드해제
let 이름11: any = 'kim';
이름11 = 123;
이름11 = undefined;
이름11 = [];

// any 보다는 unknown 타입이 나음
// 1. unknown 타입엔 모든 자료 다 집어넣을 수 있음
// 2. 자료집어넣어도 타입은 그대로 unknown입니다.

let 이름12: unknown = 'kim';
이름12 = 123;
이름12 = undefined;
이름12 = [];

// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러(any는 안그럼)
// let 이름: unknown;
// let 변수1: string = 이름;
// let 변수2: boolean = 이름;
// let 변수3: number = 이름;

// (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// let user = 'kim';
// let age = undefined;
// let married = false; 
// let 철수 = [user, age, married];
let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false; 
let 철수 :(string|number|undefined|boolean)[]= [user, age, married]; 

// (숙제2) 학교라는 변수에 타입지정해보십시오.
// let 학교 = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
let 학교 : {
  score : (number|boolean)[],
  teacher : string,
  friend : string | string[]
}
= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]