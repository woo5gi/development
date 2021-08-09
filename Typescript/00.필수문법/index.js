//변수를 만들 때 타입지정이 가능, 변수명 : 타입명
var 이름 = 'kim';
// 이름 = 123;
var 이름1 = ['kim', 'park'];
// let 나이 :{ age : number } = { age : number }
// ? 옵션
var 이름2 = { name: 'kim' };
// or연산
var 이름3 = 'kim';
var 이름4 = 'kim';
var 이름5 = 'kim';
//리턴값 지정가능
function 함수명1(x) {
    return x * 2;
}
//에러
// function 함수명2(x1 :number | string) {
//   return x1 * 2
// }
//가능
function 함수명3(x2) {
    if (typeof x2 === 'number') {
        return x2 * 2;
    }
}
var john = [100, false];
var 철수1 = {
    name: 'kim',
    age: 50
};
var 철수2 = {
    age: 50,
    weight: 100,
};
// class도 타입설정이 가능
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
