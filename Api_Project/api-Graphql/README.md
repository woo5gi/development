## REST, GraphQL
### yarn 오류시

- PowerShell 실행
- Set-ExecutionPolicy RemoteSigned
<!-- 또는 -->
Set-ExecutionPolicy Unrestricted

- yarn cache clean

### 환경설정 
#### 클라이언트

- yarn init -y
- yarn add react react-dom next sass axios
- yarn add --dev webpack

#### 서버

- yarn add express cors uuid
- yarn add --dev nodemon

### 컴포넌트
- List => item => input

### 실행
- client: root 에서 yarn run client
- server: root 에서 yarn run server

### GraphQL 
#### 서버
- yarn add apollo-server apollo-server-express graphql

#### 클라이언트
- yarn add graphql-request graphql-tag react-query 