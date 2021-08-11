// 타입 정의가 너무 길면 Type Aliases (별칭)

type Animal = string | number | undefined;
let 동물: Animal;

// object 타입도 저장가능
type 사람 = {
  name: string,
  age: number,
}

let teacher: 사람 = { name: 'john', age: 20 }


// // readonly로 잠그기
// readonly 키워드는 속성 왼쪽에 붙일 수 있으며
// 특정 속성을 변경불가능하게 잠궈줍니다. 

type Girlfriend = {
  readonly name: string,
}

let 여친: Girlfriend = {
  name: '엠버'
}

여친.name = '유라' //readonly라서 에러남

// 속성 몇개가 선택사항이라면 
// type alias를 여러개 만들어야하는게 아니라 물음표연산자만 추가
type Square = {
  color?: string,
  width: number,
}

let 네모2: Square = {
  width: 100
}

// type 키워드 여러개를 합칠 수 있습니다.
// Union type
type Name = string;
type Age = number;
type NewOne = Name | Age;

// object에 지정한 타입의 경우 합치기도 가능
// & 기호사용
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표: XandY = { x: 1, y: 2 }

//type 키워드는 재정의가 불가능
type Name = string;
type Name = number; //에러

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다

type MyType = {
  color?: string,
  size: number,
  readonly position: number[]
}

let 테스트용변수: MyType = {
  size: 123,
  position: [1, 2, 3]
}

// (숙제3) 다음을 만족하는 type alias를 연습
type User = { name: string, email?: string, phone: number }
let 회원가입정보: User = {
  name: 'kim',
  phone: 123,
}
// (숙제4). 다음을 만족하는 type alias

type User = { name: string, email?: string, phone: string }
type Adult = { adult: boolean }

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: 'kim',
  adult: false,
  phone: 1234
}