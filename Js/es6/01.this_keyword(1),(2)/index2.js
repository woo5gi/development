// 3.constructor 안에서 쓰면 constructor로 새로생성되는 오브젝트를 뜻합니다
function 기계() {
  this.이름 = 'Kim'
}
var 오브젝트 = new 기계();

// 4.eventlistener 안에서 쓰면 this는 e.currentTarget
// e.currentTarget은 지금 이벤트가 동작하는 곳
document.getElementById('버튼').addEventListener('click', function (e) {
  console.log(this)
});
// case 1. 이벤트리스너 안에서 콜백함수를 쓴다면 this는? 

document.getElementById('버튼').addEventListener('click', function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this)
  });
});
// case 2. 오브젝트 안에서 콜백함수를 쓴다면 this는? 
var 오브젝트 = {
  이름들: ['김', '이', '박'];
  함수: function () {
    오브젝트.이름들.forEach(function () {
      console.log(this)
    });
  }
}