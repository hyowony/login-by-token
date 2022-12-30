const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

app.get('/users', (req, res) => {
  res.send('유저')
})

app.post('/login', (req, res) => {
  res.send('로그인')
})

app.post('/logout', (req, res) => {
  res.send('로그아웃')
})

app.post('/register', (req, res) => {
  res.send('레지스터.')
})
