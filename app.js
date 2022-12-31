const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;

///쿠키 파서를 쓴다는 구문이다.
app.use(cookieParser())
///const로 설정된 app이 express를 사용해서. json을 쓸 것이다.
app.use(express.json())

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

/// 우리가 할당한 user 데이터이다. 
const user = [ 
  {id:"noggong"}
  {id:"hyowon"}
  {id:"kimin"}
]

//세션에 값을 담을 거라는 의미이다.
const sessions = []
// const userid = req.cookies.userid

app.get('/users', (req, res) => {
  ///userid는 요청한다 쿠키를 가지고 userid로 접근한다.
  const userid = req.cookies.userid
  ///user는 찾는 것이다. 세션을 가지고 찾는 조건은 세션에서 ssid가 쿠키를 가지고 요청했을 때 ssid와 같은 것을 찾는 것이다.
  const user = seesions.find(session => session.ssid === req.cookies.ssid)
  ///세션과 유저를 한번 찍어봐라 
  console.log(sessions)
  console.log(user)
  ///서버야 응답해봐 id는 user에 접속 했을 때 id로 호출되는 것이다.
  res.send({id:user.id})
})

app.post('/login', (req, res) => {
  ///userId는 요청하는 것이다 바디를 타고 들어가서 userId로 접속해라
  const userId = req.body.userId
  ///유저스는 찾는거다. user인 것을 user에서 id로 접속했을 때 userId와 일치하는 것이다.
  const user = users.find(user => user.id ===userId)
///ssid는 시간은 지금이고, string 형식으로 호출된다(?)
  const ssid = Date.now().toString()
///세션에 넣어라 ... 위 데이터 그대로 ssid를 사용해서(?) - 이건 잘 모르겠습니다.
  session.push({
    ...user,
    ssid
  })
///쿠키를 보내봐
  res.cookie("ssid",ssid)
//우리가 user.id로 줄게
  res.send(user.id)
})

app.post('/logout', (req, res) => {
  res.send('로그아웃 페이지')
})

app.post('/register', (req, res) => {
  res.send('레지스터.')
})


