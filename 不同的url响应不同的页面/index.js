const http = require('http');
const server = http.createServer();
server.on('request',(req,res) => {
    //处理中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url === '/'){
        return res.end('<h1 style="text-align:center">首页</h1>');
    }else if(req.url === '/about'){
        return res.end('<h1 style="text-align:center">关于</h1>');
    }else{
        return res.end('<h1 style="text-align:center;background-color: red;color: white">404 Not Found</h1>');
    }
})
server.listen(8080,()=>{
    console.log('服务启动成功，127.0.0.1:8080');
})