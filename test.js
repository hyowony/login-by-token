const express = require('express');
const cookieParser = require('cookie-parser')
///session은 express-session이라는 모듈이 필요하다. npm i express-session하면 설치할 수 있다.
const session = require('express-session')
/// 위와 마찬가지로 memorystore을 설치한다.
const Memorystore = require('memorystore')(session);

const app = express();
const port = 3000;
///express가 서버를 실행할 때 같이 실행되는 것들을 의미한다. 서버가 실행되면 쿠키 파서와 json 형식을 쓸 수 있다
app.use(cookieParser())
app.use(express.json())

///세션 객체 데이터 모음 시크릿 키 발급 과정이다. 
const sessionobj = {
  secret : 'kong',
  resave : false,
  //초기화불가 설정 저장
  saveUnuninitialized: true,
  ///세션 교환소?는 새롭게 메모리스토어에서 가져온다. 
  store: new Memorystore(),
};
/// 세션을 사용하는 과정이다. 
app.use(session(sessionobj))
/// 우리가 설정한 데이터
const users = [
  {id: "noggong"},
  {id: "hyowon"},
  {id: "kimin"}
]

/// 세션을 통해 전달된 데이터를 찾는 과정이다.
app.get('/users', (req,res)=> {
  ///유저 아이디는 세션을 통해 유저 아이디라는 것을 통해 실행된다.
  const userId = req.session.userId
  ///유저는 유저에서 id인 값과 유저id가 일치하면 찾아온다.
  const user = users.find(user => user.id === userId )
  ///응답해서 유저를 가져와라
  res.send(user)
})
///로그인은 로직상 포스트로 정보를 보내줘야 한다. 웹페이지의 바디에 정보를 보내는 과정이다. 
app.post('/login', (req,res)=> {
  //user아이디는 바디를 타고 들어가서 user.id인것을 찾는다. 
  const userId = req.body.userId
  // 유저는 찾는 것이다 user.id가 userId와 일치하는 것을 찾는 것이지.
  const user = users.find(user => user.id ===userId)
//세션 발급 과정 
  res.session.userid = user.id
  res.send(user.id)
})

app.post('/logout', (req,res)=> {
  res.send("logout page")
})
app.post('/register', (req,res)=> {
  res.send("register page")
})

app.listen(port, ()=> {
  console.log(port, '포트로 서버가 열렸어요~');
});