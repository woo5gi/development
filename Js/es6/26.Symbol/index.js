// Symbol 자료형 만드는 법 
var 심볼 = Symbol('설명아무거나적기');

// Symbol은 Object자료형에 비밀스런 key값을 부여하고싶을 때 씁니다.
// person[심볼명] = 넣을자료;
var person = { name : 'Kim' };
person.weight = 100;

var weight = Symbol('내 진짜 몸무게');
person[weight] = 200;

console.log(person);

// 심볼을 직접 입력

var height = Symbol('내 키임');

var person = { name : 'Kim', [height] : 160 };

// Symbol 자료형 특징1. 설명은 설명일 뿐
var a = Symbol('설명1');
var b = Symbol('설명1');
console.log(a === b); // false

// Symbol 자료형 특징2. Symbol.for()로 만드는 전역심볼
var a = Symbol.for('설명1');
var b = Symbol.for('설명1');
console.log(a === b); //같음

// Symbol 자료형 특징3. 기본 내장 Symbol들
// Symbol을 출력하고 싶으면 오브젝트[심볼명]
var array = [2,3,4];
console.log(array[Symbol.iterator]);

