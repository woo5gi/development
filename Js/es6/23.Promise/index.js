// 기본 생김새 성공하면 then(), 실패하면 catch()를 실행
var 프로미스 = new Promise();

프로미스.then(function () {

}).catch(function () {

});

var 프로미스 = new Promise(function (성공, 실패) {
성공();
});

프로미스.then(function () {

}).catch(function () {

});
// 힘든 수학연산 성공 후에 특정 코드를 실행
var 프로미스 = new Promise(function (성공, 실패) {
var 어려운연산 = 1 + 1;
성공();
// 실패();
});

프로미스.then(function () {
console.log('연산이 성공했습니다')
}).catch(function () {

});

var 프로미스 = new Promise(function (성공, 실패) {
var 어려운연산 = 1 + 1;
성공(어려운연산);
});

프로미스.then(function (결과) {
console.log('연산이 성공했습니다' + 결과)
}).catch(function () {
console.log('실패했습니다')
});

// 1초 대기 성공 후에 특정 코드를 실행
var 프로미스 = new Promise(function (성공, 실패) {
setTimeout(function () {
성공();
}, 1000);
});

프로미스.then(function () {
console.log('1초 대기 성공했습니다')
}).catch(function () {
console.log('실패했습니다')
});

// Promise의 몇가지 특징



// 1. 일단 new Promise()로 생성된 변수를 콘솔창에 출력해보시면 현재 상태를 알 수 있습니다.

// 성공/실패 판정 전에는 <pending> 이라고 나오며

  // 성공 후엔 <resolved>

    // 실패 후엔 <rejected> 이런 식으로 나옵니다.

      // 이렇게 프로미스 오브젝트들은 3개 상태가 있습니다.

      // 그리고 성공을 실패나 대기상태로 다시 되돌릴 순 없습니다. 참고로 알아둡시다.





      // 2. Promise는 동기를 비동기로 만들어주는 코드가 아닙니다.

      // Promise는 비동기적 실행과 전혀 상관이 없습니다.

      // 그냥 코딩을 예쁘게 할 수 있는 일종의 디자인 패턴입니다.

      // 예를 들면.. Promise 안에 10초 걸리는 어려운 연산을 시키면 10초동안 브라우저가 멈춥니다.

      // 10초 걸리는 연산을 해결될 때 까지 대기실에 제껴두고 그런거 아닙니다.