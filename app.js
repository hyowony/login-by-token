const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

const port = 3000;

app.use(cookieParser())
app.use(express.json())

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

const sessions push


// const userid = req.cookies.userid
app.get('/users', (req, res) => {
  const userid = req.cookies.userid
  const user = users.find(user => user.id ===userId)
  console.log(userid)
  res.send()
})

app.post('/login', (req, res) => {
  const userid 
})

app.post('/logout', (req, res) => {
  res.send('로그아웃')
})

app.post('/register', (req, res) => {
  res.send('레지스터.')
})
