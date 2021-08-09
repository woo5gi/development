//변수를 만들 때 타입지정이 가능, 변수명 : 타입명
let 이름 :string = 'kim';
// 이름 = 123;

let 이름1 :string[] = ['kim', 'park']
// let 나이 :{ age : number } = { age : number }


// ? 옵션
let 이름2 :{ name?: string } = { name : 'kim' }

// or연산
let 이름3 :string | number = 'kim';

// 변수처럼 담아서 사용가능
type nameType = string | number;
let 이름4 :nameType = 'kim';

// 나만의 타입을 만들어 사용가능
type NameType = 'kim' | 'park';
let 이름5 :NameType = 'kim';

//리턴값 지정가능
function 함수명1(x :number) :number{
  return x * 2
}

      //에러
      // function 함수명2(x1 :number | string) {
      //   return x1 * 2
      // }

      //가능
      function 함수명3(x2 :number | string) {
        if (typeof x2 === 'number'){
          return x2 * 2
        } 
      }

// array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 정확히 지정하고 싶으면 
// tuple 타입을 사용
type Member = [number, boolean];
let john:Member = [100, false];

// object 타입도 type 키워드로 변수에 담아 사용
type MyObject1 = {
  name? : string,
  age : number
}
let 철수1 :MyObject1 = { 
  name : 'kim',
  age : 50
}

// index signature
type MyObject2 = {
  [key :string] : number,
}
let 철수2 :MyObject2 = { 
  age : 50,
  weight : 100,
}

// class도 타입설정이 가능
class Person {
  //변수를 먼저 만들어야 가능
  name;
  constructor(name :string){
    this.name = name;
  }
}