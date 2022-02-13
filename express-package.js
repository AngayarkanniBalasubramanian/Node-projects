const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log('Executed..')
  res.send('Hello, Genius')
})

app.get('/angayar', function (req, res) {
  res.send('Hi angayar, You are great!')
})

// static 
app.get('/angayar/13', function (req, res) {
  res.send('Hey Angayar, You are going to rock!!!')
})

//dynamic
app.get('/angayar/:id', function (req, res) {
  const id = req.params.id
  if(id == 12){
    res.send("Hey Angayar, it's you")
  }
  else if(id == 07){
    res.send("Hey Meenu, it's you")
  }
})

app.get('/student', function (req, res) {
  const name = req.query.name
  res.send("Hey "+name)
})

app.get('/htmlfile', function (req, res) {
  res.sendFile("hello.html",{ root: '.' })
})


app.listen(3000,function(req,res){
  console.log('Running on port number 3000')
})