//설치한 라이브러리 첨부
const express = require('express');
//라이브러리로 새로운 객체 만들기
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

require('date-utils');

// 환경 변수 라이브러리
require('dotenv').config()

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//DB
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect(process.env.DB_URL,{useUnifiedTopology:true}, function (err, client) {
  if (err) return console.log(err);

  db = client.db('Bora');

  //서버를 열수있음 listen(서버띄울 포트번호, 띄운후 실행할 코드)
app.listen(process.env.PORT, function () {
    console.log('listening on 8080')
  });
})

app.get('/', function (요청, 응답) {
  응답.render('index.ejs')
});

//쓰기 C
app.get('/write', function (req, res) {
  res.render('write.ejs')
});

//리스트 보기 Read
app.get('/list', function (req, res) {
  //모든데이터 가져오기
  db.collection('note').find().toArray(function (err, result) {
    //console.log(result);
    res.render('list.ejs', { posts: result });
  });
});

// 로그인
// 라이브러리
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

//미들 웨어( 요청 - 응답 중간에 실행되는 코드)
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 

app.get('/login', function(req, res){
  res.render('login.ejs');
});

app.post('/login', passport.authenticate('local', {failureRedirect : '/fail'}), function(req, res){
  res.redirect('/list')
});

passport.use(new LocalStrategy({
  usernameField: 'id', // ( 사용자가 제출한 아이디가 어디 적혔는지)
  passwordField: 'pw', // ( 사용자가 제출한 비번이 어디 적혔는지)
  session: true, // ( 세션을 만들건지)
  passReqToCallback: false,//  ( 아이디/비번말고 다른 정보검사가 필요한지)
}, function (inputId, inputPw, done) {
  console.log(inputId, inputPw);
  db.collection('login').findOne({ id: inputId }, function (err, result) {
    if (err) return done(err)
    
    if (!result) return done(null, false, { message: '존재하지않는 아이디입니다.' })
    if (inputPw == result.pw) {
      return done(null, result)
    } else {
      return done(null, false, { message: '비밀번호 다릅니다.' })
    }
  })
}));

// 세션을 저장시키는 코드 (로그인 성공시 발동)
passport.serializeUser(function (user, done) {
  done(null, user.id)
});

passport.deserializeUser(function (ID, done) {
  db.collection('login').findOne({ id: ID }, function (err, result) {
    done(null, result)
  })
}); 

//회원가입
app.post('/register', function (req, res) {
  db.collection('login').insertOne({ id: req.body.id, pw : req.body.pw }, function (err, result) {
    res.redirect('/login')
  });
});

// 마이페이지
app.get('/mypage', loginOk, function (req, res) {
  console.log(req.user);
  res.render('mypage.ejs', {user : req.user})
})

function loginOk(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.send('로그인 하셔야 합니다?')
  }
}

var newDate = new Date();
var createTime = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

app.post('/add', loginOk,function (req, res) {
  console.log(req.user._id)
  //응답.send('전송완료');
  db.collection('counter').findOne({ name: '게시물갯수' }, function (err, result) {
    var totaltem = result.totalPost;
    var post = { _id: totaltem + 1, writer: req.user._id , title: req.body.title, address: req.body.address, memo: req.body.memo, cTime:createTime }
    db.collection('note').insertOne( post , function (err, result) {
      db.collection('counter').updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }, function (err, result) {
        if (err) { return console.log(err) }
      })
    });
    res.redirect('/list')
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
  db.collection('note').deleteOne({_id : req.body._id, writer : req.user._id }, function (err, result) {
    console.log('삭제완료');
    console.log('에러',err);
  })
  res.send('삭제완료');
});

// 서버에서 query string 확인
app.get('/search', (req, res)=>{
  var search = [
    {
      $search: {
        index: 'titleSearch',
        text: {
          query: req.query.value,
          path: 'title'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
        }
      }
    },
    { $sort : { _id : 1 } },
    { $limit : 10 }
  ] 
  console.log(req.query);
  db.collection('note').aggregate(search).toArray((err, result)=>{
    console.log(result)
    res.render('search.ejs', {posts : result})
  });
});