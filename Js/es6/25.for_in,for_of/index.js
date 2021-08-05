// for in 반복문은 Object에 사용
var 오브젝트 = { name : 'Kim', age : 30 };

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
}

// for in 반복문의 특징 1. enumerable(셀수있는)한 것만 출력
var 오브젝트 = { name : 'Kim', age : 30 };

console.log( Object.getOwnPropertyDescriptor(오브젝트, 'name') ); 
// {value: "Kim", writable: true, enumerable: true, configurable: true} 

// for in 반복문의 특징 2. 부모의 prototype에 저장된 것도 출력
class 부모 {
 
}
부모.prototype.name = 'Park';

var 오브젝트 = new 부모();

for (var key in 오브젝트) {
  // 내가가진것만 검사하고싶으면 hasOwnProperty 사용
  if (오브젝트.hasOwnProperty(key)) {
    console.log(오브젝트[key]);
  }
}

// for of 반복문
var 어레이 = [2,3,4,5];
for (var 자료 of 어레이) {
  console.log(자료);
}
var 어레이 = [2,3,4,5];
console.log( 어레이[Symbol.iterator]() );