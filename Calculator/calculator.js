const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res) =>{
    console.log("Current working directory : "+__dirname)
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res) => {
    const result = parseInt(req.body.num1)+parseInt(req.body.num2)
    res.send("The result is : "+result)
})

app.listen(3000,() =>{
    console.log('Server started on port number 3000')
})