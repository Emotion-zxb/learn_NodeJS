//引入fs模块
const fs = require('fs');

//调用读取文件的方法
fs.readFile('./日记.txt',function (error,data){
    console.log('error',error);
    console.log('--------------------')
    console.log('data',data);
})
