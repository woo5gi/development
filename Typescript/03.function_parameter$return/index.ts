function 내함수(x) {
  return x * 2
}
내함수(2);  // 이러면 4가 이 자리에 남음
내함수(4);  // 이러면 8이 이 자리에 남음

// 함수에 타입지정하려면 2곳 가능
// 1. 함수로 들어오는 자료 (파라미터)
// 2. 함수에서 나가는 자료 (return)

function 내함수1(x: number): number {
  return x * 2
}

// 함수는 void 타입이 있음
// 리턴 노노

// 파라미터가 옵션일 경우
//  x : number | undefined 이거랑 똑같은 의미
function 내함수(x?: number) {

}
내함수(); //가능
내함수(2); //가능


// 함수도 예외없이 Union type을 사용하면 

function 자릿수세기(x: number | string) {
  return x + 1
}

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력
function sayHi(x?: string) {
  if (x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('왜입력안함')
  }
}

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 자릿수세기(x: number | string): number {
  return x.toString().length
}

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

function 결혼가능하냐(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500
  }
  if (charm === '상') {
    score += 100
  }
  if (score >= 600) {
    return '결혼가능'
  }
}
console.log(결혼가능하냐(100, true, '상'))