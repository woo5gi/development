// 변수나 함수를 선언하면 Hoisting 현상
// 변수나 함수의 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석
function 함수(){
  
  console.log(이름);
  var 이름 = 'Kim';
  console.log(이름);
  
}

// 변수의 선언 부분을 강제로 변수의 범위 맨 위로 끌고가서 해석
/* 
var 이름;
console.log(이름);
이름 = 'Kim'
console.log(이름);
// 순으로
*/ 
// 변수 여러개 편리하게 만들기
var 이름, 나이, 성별;
var 이름 = 'Kim', 나이, 성별;
var 이름, 
    나이, 
    성별;

// 전역변수와 변수의 참조
// 바깥에 있는 변수는 안쪽에서 자유롭게 사용가능
//  쌩으로 전역변수를 만들면 window에도 보관이 됩니다. (let말고 var 키워드만요)
var 나이 = 20;

function 함수(){
  console.log(나이)
  
  console.log(window.나이);
}

함수();