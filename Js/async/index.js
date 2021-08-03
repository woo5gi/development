
// 타이머를 사용해서 먹는데 몇초걸리는지 인자로 
// 짜장면 배달=> 배달부떠남 => 식사완료(후 콜백) 순
function asyncBlackBeanTimer(seconds) {
  console.log("짜장면 배달됨");

  setTimeout(
    function () {
      console.log("식사완료");

    },
    seconds * 1000
  );

  console.log("배달부 떠남");

}
asyncBlackBeanTimer(1);

//eaters에게 짜장면 배달=> 서버응답(식사한다) => 식사완료
function asyncBlackBeanEaters(name) {
  console.log(`${name}에게 배달`);
  http.get("http://localhost:3000/eat-noodle-rand",
    function () {
      console.log(`${name} 식사완료`);
    }
  );
}
let eaters
  = ["유민상", "김준현", "문세윤", "김민경", "돈스파이크"];
for (let i = 0; i < eaters.length; i++) {
  asyncBlackBeanEaters(eaters[i]);

}


