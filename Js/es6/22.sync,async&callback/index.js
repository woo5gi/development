// 자바스크립트는 항상 동기식 처리 (synchronous)
// 한번에 코드 한줄씩 차례차례 실행

// 비동기처리 (asynchronous)
console.log(1);
setTimeout(function(){}, 1000);
console.log(2);
// 1과 2가 콘솔창에 동시에 출력
// 특수한 코드들을 발견하면 약간 제쳐두고 다른 코드부터 실행 =>비동기


// 잠깐 코드를 제쳐두는 대기실인 Web API
// setTimeout, addEventListener, ajax
// etTimeout, addEventListener, ajax관련 함수들은 1초대기, 클릭대기
// 1. 잠깐 대기실에 제껴두고 2. 준비가 완료되면 다시 실행시킵니다. 


// 콜백함수를 이용한 순차적 실행
console.log(1);
setTimeout(function(){
  console.log(2);
}, 1000);
console.log(3);

// 콜백함수 디자인하는 법

function 첫째함수(콜백){
  console.log(1);
  콜백();
}

function 둘째함수(){
  console.log(2)
}

첫째함수(둘째함수);

// 접 함수선언문을 집어넣을 수도 있다.
첫째함수(function(){
  console.log(2)
})


// 콜백함수를 여러개 사용하면 단점
첫째함수(function(){
  둘째함수(function(){
    셋째함수(function(){
      //어쩌구..
    });
  });
})
// Promise 디자인 패턴
첫째함수().then(function(){
  //그 담에 실행할거
}).then(function(){
  //그 담에 실행할거
});