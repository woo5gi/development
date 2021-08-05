// 매핑을 할 수 있는 Map 자료형
// 자료의 연관성을 표현하기 위해 사용

var person = new Map();
person.set('name', 'Kim');
person.set('age', 20);

// 오브젝트 자료형은 글자만 입력가능
// Map 자료형은 key, value값에 모든 자료를 집어넣을 수 있음
var person = new Map();
person.set([1,2,3], 'Kim');
person.set('age', 20);

// Map 다루는 법
var person = new Map();
person.set('age', 20);

person.get('age'); //자료 꺼내는 법
person.delete('age'); //자료 삭제하는 법
person.size; //자료 몇갠지 알려줌

//Map자료 반복문 돌리기
for (var key of person.keys() ){
  console.log(key)
}

//자료를 직접 집어넣고 싶으면

var person = new Map([
  ['age', 20],
  ['name', 'Kim']
]); 

// 1. object 자료형은 hasOwnProperty, toString 이런 키들도 집어넣을 수 있어서 너무 유연하고

// 2. key값으로 들어올 수 있는게 문자형태로 제한되어있어서

// Map 자료형을 사용합니다. 그냥 new Map() 쓰면 끝임 

// Set 자료형 , 중복자료를 절대 허용안함
var 출석부2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

console.log(출석부2);

출석부2.add('sally'); //자료더하기 
출석부2.has('tom'); //자료있는지 확인
출석부2.size;  //자료 몇갠지 세기

// Array의 데이터 중복제거
var 출석부 = [ 'john' , 'tom', 'andy', 'tom' ];

var 출석부2 = new Set(출석부); //Array를 Set으로 바꾸기

출석부 = [...출석부2]  //Set을 Array로 바꾸기