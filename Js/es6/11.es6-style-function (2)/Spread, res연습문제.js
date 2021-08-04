// 1. spread 문제 1
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);
// 위 코드의 출력 결과는?
// ['김', '밥', 1, 2, 3 ] 

// 2. spread 문제 2
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] )
}
c(a,b);
// 대괄호가 가득한 위 코드의 출력 결과는?
// you

// 3. default 파라미터 문제 1
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
  return 10
}
함수(3);
// 위 코드의 출력 결과는?
// a는 3, b는 6 , 9가 출력

// 4. default 파라미터 문제 2
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
}
함수(undefined, undefined);
// 위 코드의 출력 결과는?
// 15
 
// 5. array를 만들어주는 함수를 제작하고 싶습니다.
function 어레이(...rest){
  return rest
}

var newArray = 어레이(1,2,3,4,5);
console.log(newArray); 
// [1,2,3,4,5]가 출력

// 6. 최댓값 구하기
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

console.log( Math.max(...numbers) );
 
// 함수를 선언할 땐 ...은 rest 파라미터
// 함수를 사용할 땐 ...은 spread 연산자 입니다. 

// 7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다. 

function 정렬(글자){
  console.log( [...글자].sort() )
}

정렬('bear'); 

// 8. 데이터마이닝 기능 만들기 

function 글자세기(글){

  var 결과 = {};
    [...글].forEach(function(a){
       if( 결과[a] > 0 ){ 결과[a]++ } else { 결과[a] = 1 } 
    }); 
  console.log(결과)
  }