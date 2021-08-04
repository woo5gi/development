
// Array 안에 있는 데이터를 변수에 담는 방법
var array = [2, 3, 4];
var a = array[0];
var b = array[1];
var [a, b, c] = [2, 3, 4];
// 디폴트 값
var [a, b, c = 5] = [2, 3];

// Object 안에 있는 데이터를 변수에 담는 방법
// a, b라는 변수가 생성되고 Kim과 30이라는 자료를 각각 할당
var { name: a, age: b } = { name: 'Kim', age: 30 };
// 생략가능
var { name, age } = { name: 'Kim', age: 30 };

//변수를 object로 집어넣고 싶은 경우
var name = 'Kim';
var age = 30;

var obj = { name, age }

// 함수 파라미터 변수 만들 때
function 함수({ name, age }) {
  console.log(name);
  console.log(age);
}

var obj = { name: 'Kim', age: 20 };
함수(obj);

function 함수([name, age]) {
  console.log(name);
  console.log(age);
}

var array = ['Kim', 30];
함수(['Kim', 30]);

//  Object에서 데이터를 뽑아서 변수를 만들고 싶습니다
let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: {
    height,
    weight
  },
  size: [상의, 하의]
} = 신체정보;
