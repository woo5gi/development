// 변수 만들 때 타입정하기 (타입 실드씌우기)
let 이름6 :string = 'kim';

// primitive types : string, number, boolean, null, undefined
let 이름7 :string = 'kim';
let 나이 :number = 20;
let 결혼했니 :boolean = false;

// array 또는 object 자료 안에도 타입 지정가능
let 회원들 :string[] = ['kim', 'park']
let 내정보 : { age : number } = { age : 20 }

// Type 'number' is not assignable to type 'string'.(2322)
// 타입이 실수로 변경될 때 이런 경고성 에러
let 이름8 :string = 'kim'; 
// 이름8 = 30;


// 타입스크립트가 타입을 자동으로 부여
let 이름9 = 'kim';
let 나이2 = 20;


// Q2 
var 좋아하는것 :{ song :string, singer :string } = { song : 'StayWithMe', singer : '김필' }

// Q3
let project :{
  member : string[],
  days : number,
  started : boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}