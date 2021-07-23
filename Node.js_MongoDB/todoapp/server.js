//설치한 라이브러리 첨부
const express = require('express');
//라이브러리로 새로운 객체 만들기
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// 환경 변수 라이브러리
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect(process.env.DB_URL, function (에러, client) {
  if (에러) return console.log(에러);

  db = client.db('todoapp');

  // db.collection('post').insertOne({ 이름: 'john', 나이: 20, _id: 9 }, function (에러, 결과) {
  //   console.log('저장완료');
  // });

  //서버를 열수있음 listen(서버띄울 포트번호, 띄운후 실행할 코드)
  app.listen(process.env.PORT, function () {
    console.log('listening on 8080')
  });
})

app.get('/', function (요청, 응답) {
  응답.render('index.ejs')
});
app.get('/write', function (요청, 응답) {
  응답.render('write.ejs')
});

app.get('/list', function (요청, 응답) {
  //모든데이터 가져오기
  db.collection('post').find().toArray(function (에러, 결과) {
    console.log(결과);
    응답.render('list.ejs',{posts : 결과});
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

app.get('/login', function(요청, 응답){
  응답.render('login.ejs')
});

app.post('/login', passport.authenticate('local', {failureRedirect : '/fail'}), function(요청, 응답){
  응답.redirect('/list')
});

// app.get('/fail', function(요청, 응답){
//   응답.send('로그인실패');
// });

passport.use(new LocalStrategy({
  usernameField: 'id', // ( 사용자가 제출한 아이디가 어디 적혔는지)
  passwordField: 'pw', // ( 사용자가 제출한 비번이 어디 적혔는지)
  session: true, // ( 세션을 만들건지)
  passReqToCallback: false,//  ( 아이디/비번말고 다른 정보검사가 필요한지)
}, function (입력한아이디, 입력한비번, done) {
  //console.log(입력한아이디, 입력한비번);
  db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
    if (에러) return done(에러)
    
    if (!결과) return done(null, false, { message: '존재하지않는 아이디입니다.' })
    if (입력한비번 == 결과.pw) {
      return done(null, 결과)
    } else {
      return done(null, false, { message: '비밀번호 다릅니다.' })
    }
  })
}));

// 세션을 저장시키는 코드 (로그인 성공시 발동)
passport.serializeUser(function (user, done) {
  done(null, user.id)
});

passport.deserializeUser(function (아이디, done) {
  db.collection('login').findOne({ id: 아이디 }, function (에러, 결과) {
    done(null, 결과)
  })
}); 

//회원가입
app.post('/register', function (요청, 응답) {
  db.collection('login').insertOne({ id: 요청.body.id, pw : 요청.body.pw }, function (에러, 결과) {
    응답.redirect('/login')
  });
});

// 마이페이지
app.get('/mypage', loginOk, function (요청, 응답) {
  console.log(요청.user);
  응답.render('mypage.ejs', {사용자 : 요청.user})
})

function loginOk(요청, 응답, next) {
  if (요청.user) {
    next()
  } else {
    응답.send('로그인 하셔야 합니다?')
  }
}

app.post('/add', loginOk,function (요청, 응답) {
  console.log(요청.user._id)
  //응답.send('전송완료');
  db.collection('counter').findOne({ name: '게시물갯수' }, function (에러, 결과) {
    var 총게시물갯수 = 결과.totalPost;
    var post = { _id: 총게시물갯수 + 1, 작성자: 요청.user._id , 제목: 요청.body.title, 날짜: 요청.body.date }
    db.collection('post').insertOne( post , function (에러, 결과) {
      db.collection('counter').updateOne({ name: '게시물갯수' }, { $inc: { totalPost: 1 } }, function (에러, 결과) {
        if (에러) { return console.log(에러) }
      })
    });
    응답.redirect('/list')
  });
});
//상세페이지 보기
app.get('/detail/:id', function (req, res) {
  db.collection('note').findOne({ _id: parseInt(req.params.id) }, function (err, result) {
    res.render('detail.ejs', { note: result })
  })
});
//수정
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

// 삭제
app.delete('/delete', function (요청, 응답) {
  요청.body._id = parseInt(요청.body._id);
  //요청.body에 담겨온 게시물번호를 가진 글을 db에서 찾아서 삭제해주세요
  db.collection('post').deleteOne({_id : 요청.body._id, 작성자 : 요청.user._id }, function (에러, 결과) {
    console.log('삭제완료');
    console.log('에러',에러)
    응답.status(200).send({ message: '성공했습니다' });
  })
});

// 서버에서 query string 확인
app.get('/search', (요청, 응답)=>{
  var 검색조건 = [
    {
      $search: {
        index: 'titleSearch',
        text: {
          query: 요청.query.value,
          path: '제목'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
        }
      }
    },
    { $sort : { _id : 1 } },
    { $limit : 10 }
  ] 
  console.log(요청.query);
  db.collection('post').aggregate(검색조건).toArray((에러, 결과)=>{
    console.log(결과)
    응답.render('search.ejs', {posts : 결과})
  });
});
