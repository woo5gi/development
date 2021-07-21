//설치한 라이브러리 첨부
const express = require('express');
//라이브러리로 새로운 객체 만들기
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//DB
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect('mongodb+srv://admin:1477@cluster0.y1pbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, client) {
  if (err) return console.log(err);

  db = client.db('Bora');

  //서버를 열수있음 listen(서버띄울 포트번호, 띄운후 실행할 코드)
  app.listen('8080', function () {
    console.log('listening on 8080')
  });
})

//쓰기 C
app.get('/write', function (req, res) {
  res.render('write.ejs')
});

app.post('/add', function (req, res) {
  // console.log(req.body.title);
  // console.log(req.body.address);
  // console.log(req.body.memo);

  db.collection('counter').findOne({ name: '게시물갯수' }, function (err, result) {
    //console.log(result.totalPost);
    var totaltem = result.totalPost;
    db.collection('note').insertOne({ _id: totaltem + 1, title: req.body.title, address: req.body.address, memo: req.body.memo }, function (err, result) {
      //console.log('저장완료')
      res.redirect('/list');
    });
    db.collection('counter').findOneAndUpdate({ name: '게시물갯수' }, { $set: { totalPost: (totaltem + 1) }
    });
  });
});

//리스트 보기 Read
app.get('/list', function (req, res) {
  //모든데이터 가져오기
  db.collection('note').find().toArray(function (err, result) {
    //console.log(result);
    res.render('list.ejs', { posts: result });
  });
});

//상세페이지 보기
app.get('/detail/:id', function (req, res) {
  db.collection('note').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
    res.render('detail.ejs', { note: result })
  })
});


//수정하기 Update
app.get('/edit/:id', function (req, res) {
  db.collection('note').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
    res.render('edit.ejs', { note: result });
    console.log("eidtresult" + result);
  });
});

app.put('/edit', function (req, res) {
  db.collection('note').updateOne({ _id: parseInt(req.body.id) }, { $set: { title: req.body.title, address: req.body.address, memo: req.body.memo } }, function (err, result) {
    console.log('수정완료');
    res.redirect('/list');
  });
});

//삭제하기 Delete
app.delete('/delete', function (req, res) {
  req.body._id = parseInt(req.body._id)
  db.collection('note').deleteOne(req.body, function (err, result) {
    console.log('삭제완료');
    //res.status(200).send({ message: '성공했습니다' });
  })
  res.send('삭제완료');
});
