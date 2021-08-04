(1)
function 예쁜함수(){
  //어쩌구
}

(2)
var 예쁜함수 = function(){
  //어쩌구
}

// ES6 신문법

var 예쁜함수 = () => {
  //어쩌구
}

// function 문법 사용하는 이유
// 1. 여러가지 기능을 하는 코드를 한 단어로 묶고 싶을 때 (그리고 나중에 재사용할 때)
// 2. 입출력기능을 만들 때 
// arrow function을 사용하면 함수 본연의 입출력기능을 아주 직관적으로 잘 표현해줌

var 두배만들기 = (x) => { return x * 2 }
// 소괄호 생략이 가능
var 두배만들기 = x => { return x * 2 }
// 중괄호 생략이 가능
var 두배만들기 = x => x * 2 ;

console.log( 두배만들기(4) );
console.log( 두배만들기(8) );

// arrow function을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용함
