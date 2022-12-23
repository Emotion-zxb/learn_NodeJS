const path = require('path');
const fs = require('fs');

// 使用path.join()方法
// fs.readFile(path.join(__dirname,'readme.txt'),'utf-8',function(error,data) {
//     if(error){
//         console.log('读取文件出错！');
//     }
//     console.log('读取文件成功！');
//     console.log(data);
// })

// 使用path.basename()方法
// const str = '/aaa/ccc/hhh/zha.txt';
// const name = path.basename(str);
// console.log(name);//zha.txt
//可以传第二个参数：可以去除拓展名
// const name = path.basename(str,'.txt');
// console.log(name);//zha

//获取拓展名
const str = '/aaa/ccc/hhh/zha.txt';
const extname = path.extname(str);
console.log(extname);//.txt