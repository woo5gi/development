// ES6 Spread Operator => 괄호제거 해주는 연산자
var 어레이 = ['hello', 'world'];
console.log(어레이);
console.log(...어레이);

//문자를 이런식으로 array처럼 출력
var 문자 = 'hello';
console.log(문자[0]);
console.log(문자[1]);

console.log(문자);
console.log(...문자);

// 1. Array 합치기/복사에 매우 자주씀
var a = [1,2,3];
var b = [4,5];
var c = [...a, ...b];

// 값 공유임
var b = a;
// 값 복사
var b = [...a];

// 2. Object 합치기/복사에 매우 자주씀
var o1 = { a : 1, b : 2 };
var o2 = { c : 3, ...o1 };
console.log(o2);

// 참고1. 오브젝트의 key값 중복이 발생하면 어떻게될까요?
// 무조건 뒤에 오는 a가 이김
var o1 = { a : 1, b : 2};
var o2 = { a : 3, ...o1 };
console.log(o2);


// 참고2. 
// spread 연산자는 함수소괄호, 오브젝트 중괄호내, 어레이 대괄호내에서 보통 사용하셔야합니다. 
// 다른 곳에서 그냥 썼다간 에러가날 수 있습니다