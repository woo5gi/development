// 문제 1
// 함수();
//   function 함수() {
//     console.log(안녕);
//     let 안녕 = 'Hello!';
//   }

// ReferenceError: Cannot access '안녕' before initialization
// let 변수는 특이하게도 Hoisting이 되긴 하지만 undefined라는 값이 할당되지 않습니다. 그래서 출력시 에러

// 문제 2
// 함수();
// var 함수 = function () {
//   console.log(안녕);
//   var 안녕 = 'Hello!';
// }
// TypeError: 함수 is not a function
// 함수 노노 

// 문제 3

let a = 1;
var 함수 = function () {
  a = 2;
}
console.log(a);

// a = 1
// 함수() 실행 시켜야함

//문제 4
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);
//a는 1, b는 4

// 문제5
setTimeout(function() { console.log(1); }, 1000 ); 
setTimeout(function() { console.log(2); }, 2000 ); 
setTimeout(function() { console.log(3); }, 3000 ); 
setTimeout(function() { console.log(4); }, 4000 ); 
setTimeout(function() { console.log(5); }, 5000 ); 


for (var i = 0; i < 5; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}

// 문제 6
for (var i = 0; i < 3; i++){

  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}