// 함수의 default 파라미터 넣기
function 더하기 (a, b = 10){
  console.log(a + b)
}

더하기(1); //11

// default 파라미터엔 함수입력 가능
function 임시함수(){
  return 10 
}

function 더하기 (a, b = 임시함수() ){
  console.log(a + b)
}

더하기(3);

// 함수의 arguments
function 함수(a,b,c){
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i])
  }
}

함수(2,3,4);