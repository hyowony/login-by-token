const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const Memorystore = require('memorystore')(session);

const app = express();
const port = 3000;

app.use(cookieParser())
app.use(express.json())

const sessionobj = {
  secret : 'kong',
  resave : false,
  saveUnuninitialized: true,
  store: new Memorystore(),
};

app.use(session(sessionobj))

const users = [
  {id: "noggong"},
  {id: "hyowon"},
  {id: "kimin"}
]

app.get('/users', (req,res)=> {
  const userId = req.session.userId
  const user = users.find(user => user.id === userId )
  res.send(user)
})

app.post('/login', (req,res)=> {
  const userId = req.body.userId
  const user = users.find(user => user.id ===userId)

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