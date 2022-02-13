const express = require('express')
const app = express()
const uc = require('upper-case')

app.get('/', function (req, res) {
  res.send(uc.upperCase('Hello Genius'))
})

app.listen(3000)