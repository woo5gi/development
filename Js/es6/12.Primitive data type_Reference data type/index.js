// Primitive data type
// 문자나 숫자 자료형은 문자나 숫자가 변수에 직접 저장
var name = 'john';
var age = 20;

// Reference data type (Array, Object 자료형)
// 자료를 변수에 직접 저장하는게 아닌 자료가 저쪽에 있습니다 라는 화살표 (레퍼런스)를 변수에 저장
var 사람 = { name : 'Kim' };

// 예제 1
var 이름1 = '김';
var 이름2 = 이름1;
이름1 = '박';
// 이름1 = '박' 이름2=  = '김'

var 이름1 = { name : '김' };
var 이름2 = 이름1;
이름1.name = '박';
// 이름1 = { name : '박' }, 이름2= { name : '박' }

// 예제2
var 이름1 = { name : '김' };
var 이름2 = { name : '김' };
//이름1== 이름2 =>  false

//예제 3

var 이름1 = { name : '김' };

function 변경(obj){
  obj = { name : 'park' };
}

변경(이름1);
// 변경 안됨