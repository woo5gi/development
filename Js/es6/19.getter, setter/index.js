// 함수로 object 데이터를 꺼내는 방법

var 사람 = {
  name : 'Kim',
  age : 30,
  get nextAge(){
    return this.age + 1;
  },
  set setAge(나이){
    //parseInt() 숫자로 변경
    this.age = parseInt(나이);
  }

}

// console.log(사람.nextAge())
// 사람.setAge(20)
// console.log(사람.age)

// 소괄호 쓰고싶지않으면 set / get 키워드
// set은 데이터 변경하는 함수, 파라미터가 1개있어야함
// get은 데이터를 꺼내쓰는 함수, return 이있어야함
사람.setAge = '100';
console.log(사람.age)

// 소괄호 붙이면 에러
사람.nextAge;
console.log(사람.nextAge)