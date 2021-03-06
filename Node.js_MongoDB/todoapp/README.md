# Node.js, MongoDB
## (2021-07-20) 

## Part 1

### 1-2. 서버가 뭔지

**서버란**

- 요청을 받으면 데이터를 보내주는 기계

**요청이란**

- 읽기(get),쓰기(post),수정(put),삭제(delete)

### 1-3. NodeJS가 뭔지

**HTML**

- 웹페이지를 만들 때 사용하는 언어입니다.
- 웹페이지에 글, 그림, 버튼 이런걸 넣을 때 사용합니다.

**JavaScript.**

- 웹페이지를 움직이게 만들 때 사용하는 언어입니다.
- HTML을 마음대로 조작해서 내용을 바꾸고, 클릭하면 움직이게 만들고 이런게 가능합니다.
- 그래서 자바스크립트를 사용하면 로그인 모달창, 애니메이션 메뉴 이런 것들을 만들 수 있었죠.

**Node.js 를 한줄 요약**

- 자바스크립트를 브라우저 말고도 로컬 PC에서도 실행시켜줄 수 있는 실행창(런타임)입니다.
- Node.js를 실행하면 그냥 자바스크립트 입력란이 하나가 뿅 뜨고요
- 거기다가 자바스크립트 입력하면 바로바로 해석해서 실행시켜줍니다.

### 1-4. Non-blocking

일단 접수부터 다 받고 빨리 완료된 것부터 처리

SNS, 채팅 서비스에 특화된 언어

스타트업, 프로토타입 만들기에서도 많이 사용

자바스크립트 문법만으로 프론트, 백엔드 전부 가능하다는 장점

단점 -  처리속도가 떨어질 수 있다, 수학연산이나 이미지처리 같은 라이브러리가 부족할 수 있다, Node.js가 제공하는 Non-blocking 처리방식은 다른 언어에서도 비슷하게 구현 가능하다 이런게 있습니다

### 1-5. Node.js와 Express 라이브러리 설치하기

- Node.js 설치
- VS code 에디터
- 작업 폴더를 만들고 에디터로 오픈
- npm init → ntry point : ? 라고 되어있는 부분은 server.js
- npm install express

### 1-6. GET 요청하기

**콜백함수**

function(){} 이라는 문법은 자바스크립트로 함수를 하나 만들겠습니다~ 라는 뜻입니다.

```jsx
function 함수이름( ){ }
```

```jsx
.listen(서버를 오픈할 포트번호, function(){서버 오픈시 실행할 코드})
```

여기서 중요한 문법적 개념 중 하나가 바로 function(){} 부분입니다.

1. 그런데 위의 예제 코드에선 함수명을 작명하는 부분이 없고 function(){} 이렇게 사용하고 있고

2. listen()이라는 함수 안에 함수를 집어넣는 형태로 사용하고 있죠?

이걸 자바스크립트에선 **'콜백함수'**라고 부릅니다.

정의는 **함수안에 들어가는 함수**입니다. 그게 끝입니다.

### 1-7. 서버에서 HTML 파일전송해보기 & Nodemon으로 자동화

npm install -g nodemon

### 1-8 .Bootstrap을 설치해서 빠르게 HTML UI를 개발

[https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template](https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template)

### 1-9. 폼에 입력한 데이터를 서버에 전송하는 법 (POST요청)

**2021년 이후로 설치한 프로젝트들은** body-parser 라이브러리가 express에 기본 포함이라

따로 npm으로 설치할 필요가 없습니다.

```jsx
app.use(express.urlencoded({extended: true}))

```

function이라는 키워드 대신 => 라는 화살표를 이용가능(그런데 위치는 소괄호 오른쪽입니다)

```jsx
app.get( '/write', function( ){ 어쩌구 } );
```

```jsx
app.get( '/write', ( ) => { 어쩌구 } );
```

**form 데이터를 서버로 전송해보자**

1. form 태그 셋팅

2. body-parser 설치

3. POST 요청 처리하는 코드짜기

### 1-10. REST API

서로 다른 프로그램간에 소통할 수 있게 도와주는 통신 규약 ⇒ 서버에게 요청해서 데이터 가져오는 방법

**6개의 원칙**

**1. Uniform Interface**

인터페이스는 일관성이 있어야한다는 소리

- 하나의 URL로는 하나의 데이터를 가져와야함 (하나를 가져오기 위한 두개의 URL을 만들지 말자)
- 간결하고 예측가능하게 짜세요 (URL 하나를 알면 둘을 알게)
- URL 이름짓기 관습을 잘 따라주세요

**2. Client-server 역할 구분하기**

고객들은 그냥 URL 하나만 알면 서버에 있는 자료를 갖다쓸 수 있습니다.

고객에게 서버역할을 맡기거나

고객에게 DB에 있는 자료를 직접 꺼내라고 하든지 그런 식으로 코드를 짜시면 안됩니다.

**3. Stateless**

요청들은 각각 독립적으로 처리되어야합니다.

요청하나 만으로 자료를 가져오기 충분하도록

요청에 필요한 모든 정보들을 실어 보내는게 좋다

**4. Cacheable**

요청을 통해 보내는 자료들은 캐싱이 가능해야합니다.

그리고 캐싱가능하다고 표시하거나 캐싱 기간을 설정해주어야 한다고 합니다.

- 캐싱이뭐냐면

네이버를 방문하면 크롬 브라우저는 자동으로 자주 사용하는 이미지 파일, CSS 파일 등을 하드에 저장해놓습니다.

별로 바뀔일 없는 네이버 로고나 아이콘 같은거요.

하드에 저장해놓고 네이버 방문할 때 네이버서버에 네이버 로고주세요~라고 요청하지 않고 하드에서 불러옵니다.

이 행위를 캐싱이라고 합니다.

**5. Layered System**

요청처리하는곳, DB에 저장하는곳 이런 여러가지 단계를 거쳐서 요청을 처리해도 됩니다.

멋있게 말하면 여러개의 레이어를 거쳐서 요청을 처리하게 만들어도 된다고 합니다.

**6. Code on Demand**

서버는 고객에게 실제 실행가능한 코드를 전송해줄 수도 있습니다.

**URL 이름짓기 관습**

- 단어들을 동사보다는 명사 위주로 구성함
- 응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있음
- 대충 봐도 어떤 정보가 들어올지 예측이 가능함

## Part 2

### 2-1. MongoDB 셋팅하기

mongodb+srv://admin:1477@cluster0.y1pbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

### 2-2. Database에 자료 저장하는 법

mongoDB에선 자료들을 서로 구분하기 위해 _id가 꼭 있어야함

### 2-3. EJS

응답.send() 이 부분은 항상 존재

**1. 누군가 /list로 GET 요청을 하면**

**2. MongoDB에서 데이터를 꺼낸 뒤에**

**3. list.ejs 파일에 그 데이터를 꽂아넣어서 고객에게 보내줌**

### 2-4. DB데이터 읽기

mongoDB에선 자료들을 서로 구분하기 위해 _id가 꼭 있어야함

**MongoDB에서 데이터를 꺼내고 싶다면**

**db.collection('post').find()**

**db.colleciton('post').findOne()**

for (var i = 0; i < 반복시킬 횟수; i++) { 반복시킬 코드 }

for (var i = 0; i < posts.length; i ++) { 반복시킬 코드 }

### 2-6. DB데이터 읽기

findOne함수를 쓰시면 collection 내에서 내가 원하는 문서를 쉽게 찾을 수 있음

### 2-7. DB Update 함수와 inc 연산자

**DB 데이터를 수정하고 싶으면 updateOne을 쓰시면 됨**

**{ $set : { totalPost : 100 } }** 이렇게 넣어서 값을 아예 100으로 변경할 수도 있고

**{ $inc : { totalPost : 5 } }** 이렇게 넣어서 값을 5만큼 더해줄 수도 있습니다.

**(박인현)** 구글 검색 후 findOneAndUpdate를 사용. 저장완료 후 list 페이지 이동.
```jsx
  app.post('/add', function(요청, 응답){
    db.collection('counter').findOne({name : '게시물갯수'}, function(에러, 결과){
      var 총게시물갯수 = 결과.totalPost;
      db.collection('post').insertOne( { _id : (총게시물갯수 + 1), 제목 : 요청.body.title, 날짜 : 요청.body.date } , function(){
        console.log('저장완료');
        응답.redirect('/list');  // 저장 완료에서 멈추지 않고 다시 리스트 페이지로 이동
      });
      db.collection('counter').findOneAndUpdate({name : '게시물갯수'}, {
          $set: {totalPost:  (총게시물갯수 + 1) }
      });
    });
  });
```

### 2-8.AJAX로 삭제요청하기 1 (HTML 파일 구성). DB Update 함수와 inc 연산자

삭제요청을 할 때 쓸 수 있는 3가지 방법이 있습니다.

1. method-override 라이브러리의 도움을 받는다

2. AJAX로 DELETE 요청을 날린다

3. 그냥 POST요청을 날려서 DELETE 작업을 수행한다

**AJAX 는 무엇인가**

프론트엔드에서 JavaScript를 이용해 서버에 여러가지 요청을 할 수 있는 문법 같은 것입니다.

장점은 **새로고침 없이도** 서버에 몰래몰래 요청을 할 수 있음

```jsx
<script src="[https://code.jquery.com/jquery-3.4.1.min.js](https://code.jquery.com/jquery-3.4.1.min.js)"></script>
<script>
  $.ajax({
    method : 'DELETE',
    url : '/delete',
    data : '1번게시물'
  }).done(function(결과){
    AJAX 성공시 실행할 코드는 여기
  }).fail(function(에러){
    실패시 실행할 코드는 여기
  });
</script>
```

### 2-9. AJAX로 삭제요청하기 2 (서버는 뭘해야하나)

원하는 게시물을 삭제하고 싶으면 AJAX요청을 할 때

**삭제 원하는 게시물 번호를 보내십시오.**

deleteOne(삭제원하는 데이터이름, function(){} )

e.target 이라는 코드는 현재 지금 클릭한 요소를 뜻함

### 2-10. AJAX로 삭제요청하기 3 (jQuery를 이용한 UI 기능) & 여러가지 응답방법

```jsx
<script>
  $('.delete').click(function(){
    $.ajax({
      method : 'DELETE',
      url : '/delete',
      data : { _id : e.target.dataset.id }
    }).done((결과)=>{
      //AJAX 성공시 실행할 코드적기
    }).fail((xhr,code,err)=>{
      //AJAX 실패시 실행할 코드적기
    });
  });
</script>
```

$(this).parent('li').fadeOut()

지금 누른곳(이벤트가 동작하는 곳)의 부모(상위요소)중에 <li> 태그가 있으면 사라지게 해주셈

### 2-11. URL parameter

.findOne({원하는게시물정보}, function(){ 완료시 실행할 코드 })

### 2-12. Bootstrap 디자인 넣기 & HTML 조립식 개발하기

```jsx
<head>
  <link href="/public/님들이만든CSS파일.css" rel="stylesheet">
</head>
```

```jsx
app.use('/public', express.static('public'))
```

"/public 위치에 있는 폴더를 쓰겠다"

```jsx
<%- include('nav.html') %>
```

## Part3

## (2021-07-21)

### 3-1. 글 수정 기능 1 : /edit 페이지 안내와 method-override

input안에 기존 데이터 채워주려면 <%= %>EJS 문법을 쓰면 됨

**method-override 라이브러리 사용법**

npm install method-override

```jsx
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
```

form 태그에 PUT요청을 사용가능

### 3-2. 글 수정 기능 2 : DB 데이터를 수정해보자

method=PUT

```jsx
<form action="/edit?_method=PUT" method="POST">
  <input 어쩌구>
</form>
```

**DB 데이터를 수정하려면 updateOne 씀**

updateOne( 1.업데이트할게시물찾기, 2.수정할내용, 3.콜백함수)

```jsx
.updateOne( {_id : ??}, {$set : { 제목 : ??, 날짜 : ?? }}, function(){}
```

**<form>태그에 몰래 안보이는 <input>을 추가 ⇒ id 정보 가져옴**

전송된 input 데이터들 요청.body.title로 확인

## (2021-07-22) 

### 3-3. 세션, JWT, OAuth 등 회원인증 방법론 쉽게 이해하기

1.  Session-based Authentication

사용자의 세션정보를 저장해서 로그인 기능을 구현

1.  JSON Web Token (JWT)

토큰 방식은 세션데이터를 서버에 저장하지 않고

마이페이지를 열람할 수 있는 열쇠(토큰)를 사용자에게 쥐어주는 것

1. Open Autentication

페이스북, 구글 로그인

### 3-4. (회원인증기능 1) 로그인 페이지 만들기 & 아이디 비번 검사

**npm install passport passport-local express-session**

```jsx
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
```

미들웨어 ⇒ 요청과 응답 사이에 뭔가 실행시키는 코드

흐름

1. 로그인 페이지 제작 / 라우팅
2. 로그인 요청시 아이디/비번 검증 미들웨어 실행시키기
3. 아이디/비번 검증하는 세부 코드 작성

### 3-5. (회원인증기능 2) 아이디 비번을 DB와 비교하고 세션 만들어주기

1. 아이디/비번 DB와 맞는지 비교

    **1. DB에서 {id : 입력한아이디} 인 문서를 찾은 다음에**

    **2. 그게 있으면 그 문서에 있는 pw 값과 입력한 비번을 비교하면 되지 않을까요?**

    **3. 성공하면 찾은 유저를 출력해주든가 그러시면 되겠군요**

2. 세션 만들고 세션아이디 발급해서 쿠키로 보내주기

### 3-6. (회원인증기능 3) 로그인 유저만 접속할 수 있는 페이지 만들기

**세션아이디를 바탕으로 이 유저의 정보를 DB에서 찾기 ⇒ 요청.user**

### 3-7. .env 파일에서 민감한 환경변수들 관리하기

npm install dotenv

```jsx
require('dotenv').config()

//(.env 파일)
PORT=8080
DB_URL="mongodb+srv://codingapple1@저쩌구"
```

### 3-8. 검색기능 만들기 1 : URL query string

- collection().findOne() 하면 하나 찾을 수 있음
- collection().find().toArray() 하면 여러개

**query string**

/search?value=값

### 3-9. 검색기능 만들기 2 : 게시물이 100만개일 때 쓰는 indexing 개념설명

{ 인덱스만들항목이름 : 'text' }

### 3-10. 검색기능 만들기 3 : 네이버같은 검색기능 만들려면 (Search index)

**Query string ⇒ param, serialize**

여러가지 검색용 연산자 ⇒ aggregate() 안에 [ {검색조건1}, {검색조건2} ... ]

- $sort를 쓰면 결과를 정렬
- $limit을 쓰면 결과를 제한
- $project를 쓰면 찾아온 결과 중에 원하는 항목만 보여줌

### 3-11. 회원 기능을 포함한 게시판 기능

**denormalizing**

### 3-12. router 폴더와 파일을 만들어 API들 관리하기

```jsx
// (server.js)

app.use('/', require('./routes/shop.js') );

//요약
(server.js)

app.use('/shop', require('./routes/shop.js') );

// (shop.js)

var router = require('express').Router();

router.get('/shirts', function(요청, 응답){
   응답.send('셔츠 파는 페이지입니다.');
});

router.get('/pants', function(요청, 응답){
   응답.send('바지 파는 페이지입니다.');
}); 

module.exports = router;

```