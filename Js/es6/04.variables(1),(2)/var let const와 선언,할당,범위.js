// var 재선언o 재할당o 범위=>function
// 재할당
var 이름 ='킴'
이름 = '박'

// let 재선언x 재할당o 
let 나이;

// const 재선언x 재할당x
const 성별 = '남자';

//  const 변수에 오브젝트를 담으면 오브젝트 내의 데이터는 변경 가능
const 오브젝트 = { 이름 : 'Kim' }
오브젝트.이름 = 'Park'; //가능 

// let, const 변수는 존재범위가 거의 모든 {중괄호} 
function 함수(){
  var 이름 = 'Kim';
  console.log(이름); //가능
}
 //console.log(이름); //에러