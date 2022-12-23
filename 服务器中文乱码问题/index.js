const http = require('http');

const server = http.createServer();

server.on('request',(req,res) => {
    //乱码处理
    res.setHeader('Content-type','text/html;charset=utf-8');
    res.end('欢迎你，查小兵，加油，奥利给');
})

server.listen(8080,() => {
    console.log('启动成功：localhost:8080');
})