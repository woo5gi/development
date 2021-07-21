//설치한 라이브러리 첨부
const express = require('express');
//라이브러리로 새로운 객체 만들기
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://admin:1477@cluster0.y1pbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (에러, client) {
  if (에러) return console.log(에러);

  db = client.db('todoapp');

  // db.collection('post').insertOne({ 이름: 'john', 나이: 20, _id: 9 }, function (에러, 결과) {
  //   console.log('저장완료');
  // });

  //서버를 열수있음 listen(서버띄울 포트번호, 띄운후 실행할 코드)
  app.listen('8080', function () {
    console.log('listening on 8080')
  });
})

app.get('/', function (요청, 응답) {
  응답.render('index.ejs')
});
app.get('/write', function (요청, 응답) {
  응답.render('write.ejs')
});

app.post('/add', function (요청, 응답) {
  응답.send('전송완료');
  console.log(요청.body.title);
  console.log(요청.body.date);
  
  db.collection('counter').findOne({ name: '게시물갯수' }, function (에러, 결과) {
    console.log(결과.totalPost);
    var 총게시물갯수 = 결과.totalPost;
    db.collection('post').insertOne({ _id: 총게시물갯수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date }, function (에러, 결과) {
      console.log('저장완료')
      // counter 라는 콜렉션에 있는 totalPost라는 항목 1증가시킴
      // updateOne( {어떤데이터를 수정할지} , {수정값 } )
      db.collection('counter').updateOne( {name : '게시물갯수' } , { $inc : { totalPost : 1 } } , function(에러, 결과){
        if (에러) return console.log(에러);
        console.log('수정완료')
      })
    });
  });
});

app.get('/list', function (요청, 응답) {
  //모든데이터 가져오기
  db.collection('post').find().toArray(function (에러, 결과) {
    console.log(결과);
    응답.render('list.ejs',{posts : 결과});
  });
});

app.delete('/delete', function(요청, 응답){
  요청.body._id = parseInt(요청.body._id)
  db.collection('post').deleteOne(요청.body, function(에러, 결과){
    console.log('삭제완료');
    응답.status(200).send({message : '성공했습니다'});
  })
  응답.send('삭제완료')
});

app.get('/detail/:id', function(요청, 응답){
  db.collection('post').findOne({ _id : parseInt(요청.params.id) }, function(에러, 결과){
    응답.render('detail.ejs', {data : 결과} )
  })
});

app.get('/edit/:id', function (요청, 응답) {
  db.collection('post').findOne({ _id: parseInt(요청.params.id) }, function (에러, 결과) {
    응답.render('edit.ejs', {post : 결과} );
    console.log("eidt결과" + 결과);
  });
});

app.put('/edit', function(요청, 응답){
  db.collection('post').updateOne( {_id : parseInt(요청.body.id) }, {$set : { 제목 : 요청.body.title , 날짜 : 요청.body.date }}, function(에러,결과){
    console.log('수정완료');
    응답.redirect('/list');
  });
});