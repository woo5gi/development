## async

### 동기 방식이란?

작성된 순서대로 실행 

### 프로그램이 비동기로 일한다는것은

쓰레드나 프로세스가 여럿이 돌고있다는 것

멀티태스킹

### 동기방식

```jsx
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
```

```jsx
function 학생정보_조회(학생_학번, 학생정보로_할_일) {
      ajax(
        baseUrl + "student-info/" + 학생_학번,
        function (response) {
          학생_정보로_할_일(response)
        }
      );
    }

    function 고교_DB_주소_조회(고교명, 주소로_할_일) {
      ajax(
        baseUrl + "highschool-db/" + 고교명,
        function (response) {
          주소로_할_일(response)
        }
      );
    }

    function 고교시_수강수업_조회(고교_DB_주소, 학생_주민번호, 수강과목_알람으로_할_일) {
      ajax(
        baseUrl + "classes/" + 고교_DB_주소+"/"+학생_주민번호,
        function (response) {
          수강과목_알람으로_할_일(response)
        }
      );
    }

    function 수업정보_조회(학생의_고3수학_수업코드, 수업정보로_할_일) {
      ajax(
        baseUrl + "classes-info/" + 학생의_고3수학_수업코드,
        function (response) {
          수업정보로_할_일(response)
        }
      );
    }
```

⇒  콜백지옥

학생정보조회⇒ 고교_DB_주소_조회⇒ 고교시_수강수업_조회⇒ 수업정보조회

가독성도 떨어지고 실수 위험도 커짐

```jsx
function 고3시_수학교사_찾기(학생_학번) {
    학생정보_조회(학생_학번,
      function (학생_정보) {
        let 학생_주민번호 = 학생_정보['주민번호'];
        let 고교명 = 학생_정보['고등학교명'];
        고교_DB_주소_조회(고교명,
          function (고교_DB_주소) {
            고교시_수강수업_조회(고교_DB_주소, 학생_주민번호,
              function (수강과목_일람) {
                let 학생의_고3수학_수업코드 = 수강과목_일람["고3수학"];
                수업정보_조회(학생의_고3수학_수업코드,
                  function (수업정보) {
                    cosole.log(`담당교사: ${수업정보["교사명"]}`);
                  }
                )
              }
            )
          }
        )
      }
    )
  }

  고3시_수학교사_찾기('12345');
```

### 비동기 방식

```jsx
function 학생정보_조회_Promise(학생_학번) {
    return new Promise(function (resolve, reject) {
      ajax(baseUrl + "student-info/" + 학생_학번,
        function (response) {
          학생_정보로_할_일(response)
        });
    });
  }

  function 고교_DB_주소_조회_Promise(학생_주민번호, 고교명) {

    return new Promise(function (resolve, reject) {
      ajax(baseUrl + "highschool-db/" + 고교명,
        function (response) {
          주소로_할_일(response)
        });
    });
  }

  function 고교시_수강수업_조회_Promise(학생_주민번호, 고교_DB_주소) {
    return new Promise(function (resolve, reject) {
      ajax(baseUrl + "classes/" + 고교_DB_주소 + "/" + 학생_주민번호,
        function (response) {
          수강과목_알람으로_할_일(response)
        });
    });
  }

  function 수업정보_조회_Promise(학생의_고3수학_수업코드) {
    return new Promise(function (resolve, reject) {
      ajax(baseUrl + "classes-info/" + 학생의_고3수학_수업코드,
        function (response) {
          수업정보로_할_일(response)
        });
    });
  }
```

⇒  then 이용 , 체이닝 방식

```jsx
학생정보_조회_Promise("1234")
  .then(function (학생_정보){
    let 학생_주민번호 = 학생_정보['주민번호'];
    let 고교명 = 학생_정보['고등학교명'];
    return 고교_DB_주소_조회_Promise(학생_주민번호, 고교명)
  })
  .then(function (학생_정보){
    return 고교재학시_수강수업_조회_고교_DB_주소_조회_Promise(
    학생_주민번호_AND_고교_DB_주소[0],
    학생_주민번호_AND_고교_DB_주소[1],  
    )
  })
  .then(function (수강과목_일람){
   let 학생의_고3수학_수업코드 = 수강과목_일람["고3수학"];
   return 수업정보_조회_Promise(학생의_고3수학_수업코드);
  })
  .then(function (수업정보){
    console.log(`담당교사: ${수업정보["교사명"]}`);
  })
```

### es7 Async/Await

프로미스로 작성된 코드들을 간결하고 직관적이게 실행할수 있음

```jsx
//  비동기 작업을 수행할 함수앞에 async 를 붙이면 동기작업처럼 할수있음
// 내부동작은 비동기적 작업이지만 동기코드처럼 쉽고 직관적임
async function 고3시_수학교사_찾기_Promise(학생_학번) {
    let 학생_정보 = await 학생정보_조회_Promise(학생_한번);
    let 고교_DB_주소 = await 고교_DB_주소_Promise(학생_정보["고교명"]);
    let 수강과목_열람 = await 고교시_수강수업_조회_Promise(학생_정보["주민번호"], 고교_DB_주소);
    let 수업정보 = await 수업정보_조회_Promise(수강과목_열람["고3수학"]);
    console.log(`담당교사: ${수업정보["교사명"]}`);

  }
  고3시_수학교사_찾기_Promise("012345");
```
