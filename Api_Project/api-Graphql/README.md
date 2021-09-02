## REST, GraphQL
### yarn 오류시

- PowerShell 실행
- Set-ExecutionPolicy RemoteSigned
<!-- 또는 -->
Set-ExecutionPolicy Unrestricted

### 환경설정

- yarn init -y
- yarn add react react-dom next sass axios
- yarn add --dev webpack
- yarn add graphql graphql-request graphql-tag react-query

### 서버

- yarn add express cors uuid
- yarn add --dev nodemon
- yarn add apollo-server apollo-server-express express graphql


### 컴포넌트
- List => item => input

### 실행
- client: root 에서 yarn run client
- server: root 에서 yarn run server

### 로그인
http://localhost:3000/?userid=roy

### graphql
mutation Message($text: String!, $userId:ID!) {
  createMessage(text:$text, userId: $userId){
    id
    text
    userId
    timestamp
  }
}
{
  "text": "graphql playground 에서 작성",
  "userId": "roy"
}