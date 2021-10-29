#### 환경설정

- npm init -y

#### backend 5000

- cd backend
- npm i

<!--
npm init -y
npm i express
npm i -D nodemon
npm i multer
npm i uuid mime-types
npm i bcryptjs
npm i mongoose
npm i dotenv
-->

#### frontend 3000

- cd frontend
- npm i

<!--
npx create-react-app frontend
npm i axios
npm i react-toastify
npm i react-router
npm i react-router-dom
npm i @mui/icons-material
npm i @emotion/styled
-->

#### .env

혹시 몰라서 비빌번호 부분을 뺴놓았으니 설정 다시해주세요

#### 시작

백엔드 시작후 프론트엔드 시작

- 백엔드 :

- cd backend
- npm run dev

- 프론트엔드 :

- cd frontend
- npm run start

#### 로그인

id : 123456
pw : 123456

#### docker 이미지

- docker-compose up

- docker-compose up —build

- (db는 연결을 해놓지 못하였습니다)

#### docker 이미지 오류

- Invalid host header 오류시

- node_modules\react-scripts\config\webpackDevServer.config.js 에서

- disableHostCheck: true,

- ex)
- disableHostCheck: true,
- // !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',

- 후 이미지삭제후 docker-compose up

### 0917 진행사항

- 블로그프로젝트에서 db부분을 연결하는 부분은 아직 구현하지 못하였습니다.

### 0924 진행사항

- 블로그프로젝트에서 db부분을 연결하는 부분을 구현하고 데이터를 뿌려주는 작업까지 진행하였습니다.

### 도커환경시

"proxy": "http://backend:5000",
