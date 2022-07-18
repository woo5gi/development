# 학습내용
- mongoDB 기본 사용법 - CRUD
- mongoDB Atlas - 메니지드 클라우드 데이터베이스 배포하기
- 비동기(async) 프로그래밍으로 백엔드 효율 극대화시키기
- Express 프레임워크로 REST API 만들기
- 관계된 데이터 효율적으로 읽는 방법(populate)
- 자식 문서를 부모 문서에 적절하게 내장해서 읽기 퍼포먼스 극대화시키기
- Index 적용으로 탐색 퍼포먼스 극대화
- 트렌젝션(Multi Document Transaction) 활용해서 일관성 있게 데이터 관리하기
- AWS lightsail에 백엔드 서버 배포하기
- 관계형 데이터베이스(relational database)와 mongoDB 비교하기

### create document

컬렉션 생성 - use 컬렉션 이름

insert - db.users.insertOne({})

검색 - db.users.find()

객체 넣기 - db.users.insertOne({ name: {first:"kang" ,last"musk} })

### update document

db.users.updateOne({name:"Kang jeonuk"},{$set:{age:26}})

### Update with ObjectID

db.users.findOne({\_id:ObjectId("6152b9569c4e74e241df66e9")})

더하기 - db.users.updateOne({\_id:ObjectId("6152b9569c4e74e241df66e9") } , {$inc:{age:1}})

### delete document

db.users.deleteOne({\_id:ObjectId("6152b9569c4e74e241df66e9")})

### Database 구조

database → cllection → document

## Node.js & Express를 활용한 REST API 만들기

### 설정

npm init
npm i express
npm i -D nodemon
npm i mongoose

npm i axios

nodemon client.js
