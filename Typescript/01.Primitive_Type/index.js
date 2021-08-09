// 변수 만들 때 타입정하기 (타입 실드씌우기)
var 이름6 = 'kim';
// primitive types : string, number, boolean, null, undefined
var 이름7 = 'kim';
var 나이 = 20;
var 결혼했니 = false;
// array 또는 object 자료 안에도 타입 지정가능
var 회원들 = ['kim', 'park'];
var 내정보 = { age: 20 };
// Type 'number' is not assignable to type 'string'.(2322)
// 타입이 실수로 변경될 때 이런 경고성 에러
var 이름8 = 'kim';
// 이름8 = 30;
// 타입스크립트가 타입을 자동으로 부여
var 이름9 = 'kim';
var 나이2 = 20;
// Q2 
var 좋아하는것 = { song: 'StayWithMe', singer: '김필' };
// Q3
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
