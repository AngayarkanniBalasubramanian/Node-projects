const express = require('express')
const mongoose = require('mongoose')
const app = express()

const url = 'mongodb://localhost/students'

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

const studentsRouter = require('./routes/students')
app.use('/students',studentsRouter)

app.listen(9000,function(){
    console.log('The application is running on port number 9000')
})