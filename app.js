const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.json())

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

const user = [ 
  {id:"noggong"}
  {id:"hyowon"}
  {id:"kimin"}
]

const sessions = []
// const userid = req.cookies.userid
app.get('/users', (req, res) => {
  const userid = req.cookies.userid
  const user = seesions.find(session => session.ssid === req.cookies.ssid)
  console.log(sessions)
  console.log(user)
  res.send({id:user.id})
})

app.post('/login', (req, res) => {
  const userId = req.body.userId
  const user = users.find(user => user.id ===userId)

  const ssid = Date.now().toString()

  session.push({
    ...user,
    ssid
  })

  res.cookie("ssid",ssid)

  res.send(user.id)
})

app.post('/logout', (req, res) => {
  res.send('로그아웃 페이지')
})

app.post('/register', (req, res) => {
  res.send('레지스터.')
})
