//  3. array를 파라미터형태로 집어넣고 싶을 때 씀
function 더하기(a,b,c){
  console.log(a + b + c)
}

var 어레이 = [10, 20, 30];
더하기(...어레이);  //요즘방식
// 더하기.apply(undefined, 어레이);  //옛날방식


//apply, call 함수가 뭔지
// person.인사()라는 함수를 쓰는데 
// person2라는 오브젝트에 있는 함수처럼 실행해라~ 
var person = {
  인사 : function(){
    console.log(this.name + '안녕')
  }
}

var person2 = {
  name : '손흥민'
}

person.인사.apply(person2);


// apply 함수의 사용법 = 실행할함수.apply(적용할곳);

var person = {
  인사 : function(){
    console.log(this.name + '안녕')
  }
}

var person2 = {
  name : '손흥민'
}

person.인사.apply(person2);
person.인사.call(person2);

// person.인사.apply(person2, 파라미터);
// person.인사.call(person2, 파라미터);
person.인사.apply(person2, [1,2,3]);
person.인사.call(person2, 1,2,3);

// 더하기() 함수를 실행하는데 undefined에 적용해서 실행해주시고요 파라미터로 어레이를 집어넣어주세요
더하기.apply(undefined, 어레이) 

// Q. 잉 근데 undefined에 적용하는건 뭔소리인가요?
// A. 실은 그냥 아무곳에도 적용해서 실행하지 않게하기 위해 적은 내용입니다. 그냥 쌩으로 더하기() 함수가 실행됩니다. 
// 왜냐면 더하기()함수는 어디에도 적용할 필요가 없으니까요. 근데 비워두면 문제가 생기기 때문에 아무 값이나 집어넣은 것입니다.

