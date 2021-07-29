## AJAX (Asynchronous Javascript And XML)
### 정의

자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능

자바스크립트를 통해서 서버에 데이터를 비동기 방식으로 요청하는 것

### 비동기 방식이란?

웹페이지를 리로드하지 않고 데이터를 불러오는 방법

필요한 부분만 불러와 사용할 수 있으므로 매우 큰 장점

### AJAX를 사용 가능하게 만드는 것들

- HTML
- DOM
- JavaScript
- XMLHttpRequest
- Etc

AJAX로 할 수 있는 것

AJAX라는 네트워크 기술을 이용하여 클라이언트에서 서버로 데이터를 요청하고 그에 대한 결과를 돌려받을 수 있다.

AJAX를 사용하는 이유

AJAX는 HTML 페이지 전체가 아닌 일부분만 갱신할 수 있도록 XMLHttpRequest객체를 통해 서버에 request한다. 이 경우, JSON이나 XML형태로 필요한 데이터만 받아 갱신하기 때문에 그만큼의 자원과 시간을 아낄 수 있다.

### AJAX의 장점

- 웹페이지의 속도향상
- 서버의 처리가 완료될 때까지 기다리지 않고 처리가 가능하다.
- 서버에서 Data만 전송하면 되므로 전체적인 코딩의 양이 줄어든다.
- 기존 웹에서는 불가능했던 다양한 UI를 가능하게 해준다. ( Flickr의 경우, 사진의 제목이나 태그를 페이지의 리로드 없이 수정할 수 있다.)

### AJAX의 단점

- 히스토리 관리가 되지 않는다.
- 페이지 이동없는 통신으로 인한 보안상의 문제가 있다.
- 연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다.
- XMLHttpRequest를 통해 통신하는 경우, 사용자에게 아무런 진행 정보가 주어지지 않는다. (요청이 완료되지 않았는데 사용자가 페이지를 떠나거나 오작동할 우려가 발생하게 된다.)
- AJAX를 쓸 수 없는 브라우저에 대한 문제 이슈가 있다.
- HTTP 클라이언트의 기능이 한정되어 있다.
- 지원하는 Charset이 한정되어 있다.
- Script로 작성되므로 디버깅이 용이하지 않다.
- 동일-출처 정책으로 인하여 다른 도메인과는 통신이 불가능하다. (Cross-Domain문제)

### AJAX의 진행과정

1. XMLHttpRequest Object를 만든다.
    - request를 보낼 준비를 브라우저에게 시키는 과정
    - 이것을 위해서 필요한 method를 갖춘 object가 필요함
2. callback 함수를 만든다.
    - 서버에서 response가 왔을 때 실행시키는 함수
    - HTML 페이지를 업데이트 함
3. Open a request
    - 서버에서 response가 왔을 때 실행시키는 함수
    - HTML 페이지를 업데이트 함
4. send the request

### AJAX가 쓰이는 방법

```jsx
// JavaScript / jQuery 입문과 웹 UI개발
// 기본형
// Js\JQUERY\AJAX\index.html
   $.ajax({
       url: 'https://naver.com',
       type: 'GET'
     });

$.ajax({
      url: 'https://codingapple1.github.io/hello.txt',
      type: 'GET'
    }).fail(function () {
      // 요청이 실패했을 때 실행할 코드 
    }).always(function () {
      // 실패하든 성공하든 항상 실행할 코드
    })
// textStatus, errorThrown을 출력해보면 Ajax 요청이 왜 실패했는지 알수있음
    $.ajax({
      url: 'https://이상한URL.com',
      type: 'GET'
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown)
    })

// 버튼을 누르면 Ajax 요청
	<h4>임시내용</h4>
  <button id='어쩌구버튼'>버튼</button>
    $('#어쩌구버튼').click(function () {
      $.ajax({
        url: 'https://codingapple1.github.io/hello.txt',
        type: 'GET'
      }).done(function (데이터) {
        $('h4').html(데이터)
      });
    });
```

### axios

- 구형 브라우저를 지원한다.
- 응답시간 초과를 설정하는 방법이 있다.
- JSON데이터 자동변환이 가능하다.
- node.js에서의 사용이 가능하다
- request aborting (요청취소)가 가능하다
- catch에 걸렸을 때, .then을 실행하지 않고, .console창에 해당 에러 로그를 보여준다.
- return 값은 Promise 객체 형태이다.

```jsx
// React 리액트 기초부터 쇼핑몰 프로젝트까지! 
//.get(요청), .then(성공했을때) ,.catch(실패했을때)
//React\shop\src\App.js
<button className="btn btn-primary" onClick={() => {
                   axios
									 .get('https://codingapple1.github.io/shop/data2.json')
                   .then((result)=>{ 
                     console.log(result.data);
                     //카피본 
                    shoes변경([...shoes, ...result.data]);
                    })
                   .catch(()=>{ console.log("Error") })
            }}>더보기</button>
```

### fetch

- 자바스크립트 내장 라이브러리이기 때문에 import하지 않고 사용할 수 있다.
- 라이브러리의 업데이트에 따른 에러 방지가 가능하다 ( React Native의 경우 업데이트가 잦아서 라이브러리가 쫓아오지 못하는 경우가 많은데, fetch의 경우 이를 방지할 수 있다.)
- 네트워크 에러가 발생했을 때 기다려야 한다. (reponse timeout API 제공 x)
- 지원하지 않는 브라우저가 있다.
- return 값은 Promise객체 형태이다.

### axios와 fetch코드 비교

fetch - POST

```jsx
let url = 'https://someurl.com';
let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                property_one: value_one,
                property_two: value_two
            })
        };
let response =await fetch(url, options);
let responseOK = response && response.ok;
if (responseOK) {
let data =await response.json();
    // do something with data
}

//Bora_proto\views\detail.ejs
const contentsFetching = document.getElementById("content-fetching")fetch("<%= note.address %>")
            .then(response => response.text())
            .then(result => contentsFetching.innerHTML = result)

```

Axios - POST

```jsx
let url = 'https://someurl.com';
let options = {
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                property_one: value_one,
                property_two: value_two
            }
        };
let response =await axios(options);
let responseOK = response && response.status === 200 && response.statusText === 'OK';
if (responseOK) {
let data =await response.data;
    // do something with data
}
```