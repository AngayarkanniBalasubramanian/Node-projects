
//builtin module - to run the application on the server.
var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.write("Hi angayar, be happy forever!")
    // res.end()
    res.end("Hello yaar everything will be ok, never leave your smile!!")
}).listen(8000)