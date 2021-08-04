//연습문제 1
var 이미지로딩 = new Promise(function (성공, 실패) {
  var img = document.querySelector('test');
  img.addEventListener('load', function () {
    성공();
  });
  img.addEventListener('error', function () {
    실패();
  });

});


이미지로딩.then(function () {
  console.log('성공했어요')
}).catch(function () {
  console.log('실패했어요')
})

//연습문제 3
var 프로미스 = new Promise(function (성공, 실패) {
  $.get('https://codingapple1.github.io/hello.txt').done(function (결과) {
    성공(결과)
  });
});

프로미스.then(function (결과) {
  console.log(결과);

  var 프로미스2 = new Promise(function (성공, 실패) {
    $.get('https://codingapple1.github.io/hello2.txt').done(function (결과) {
      성공(결과)
    })
  });

  return 프로미스2;

}).then(function (결과) {
  console.log(결과);
})