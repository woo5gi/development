async function 더하기() {
  return 1 + 1
}

더하기().then(function (결과) {
  console.log(결과)
});

// unction 안에서 어려운 연산을 실행한 뒤에 성공/실패를 판정해주는 Promise
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공();
  });
  어려운연산.then();
}
더하기();

// .then()이게 너무 복잡해서 보기 싫으시면 await
// await= 기다려달라, asyncfunction 안에서쓰면 .then() 대신 사용가능

async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    var 결과 = 1 + 1;
    성공();
  });
  var 결과 = await 어려운연산;
}
더하기();

// await은 실패하면 에러가 나고 코드가 멈춥니다
async function 더하기() {
  var 어려운연산 = new Promise((성공, 실패) => {
    실패();
  });
  try { var 결과 = await 어려운연산 }
  catch { // 어려운연산 Promise가 실패할 경우 실행할 코드
  }
}