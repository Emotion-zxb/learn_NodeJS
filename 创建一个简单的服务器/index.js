const http = require('http');
const server = http.createServer();
server.on('request',function(req,res){
    //req:请求客户端相关信息
    // res:响应对象
    console.log('someone is visiting the web server...');
    // console.log(req.url,req.method);
    res.end(req.url);
})
server.listen('8080',function(){
    console.log('serevr is running at 127.0.0.1:8080');
})