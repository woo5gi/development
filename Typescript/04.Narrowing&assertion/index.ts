// Type Narrowing 
// if문 등으로 타입을 하나로 정해주는 것을 뜻합
function 내함수10(x: number | string) {
  if (typeof x === 'number') {
    return x + 1
  }
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}

// Type Assertion
// 이 변수의 타입을 number로 생각해주세요
// 변수명 as string

function 내함수11(x: number | string) {
  return (x as number) + 1
}
console.log(내함수(123))

//as 키워드 사용시 특징이 있는데 
// 1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행합니다.
// 2. 실은 그냥 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일합니다.

let 이름: number = 123;

(이름 as string) + 1;  //현재문법
<string>이름 + 1;   //옛날문법


//  타입을 강제로 부여하는 기계를 하나 만들어쓰고 싶은 때
type Person = {
  name: string
}
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');