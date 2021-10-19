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
