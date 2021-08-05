### 횐경설정

#### 서버
npm init -y
npm i express
npm i -D nodemon
npm i multer
npm i uuid mime-types
npm i bcryptjs

#### 클라이언트
npx create-react-app client
npm i axios
npm i react-toastify
npm i mongoose
npm i dotenv
npm i react-router
npm i react-router-dom

#### 시작
- 서버 : npm run dev

##### 섹션 5 : 리팩토링 
- server의 이미지 업로드 등을 routes 와 middleware로 옮겨줌


##### 섹션 5 : 회원가입
- password => 암호화+salt => hash => 데이터베이스에 id와 hash에 저장
##### 섹션 5 : 로그인
- id =>user의 hash조회=> hash1 => hash의 salt조회 => salt => 암호화 + salt => hash2 => hash1, hash2같으면 인증성공