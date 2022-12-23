const fs = require('fs');
/*fs.readFile('./1.txt','utf-8',function(err,data){
    if(err){
        return console.log('读取文件失败！');
    }
    console.log('读取文件成功了！');
    console.log(data);
})*/

//写绝对路径
/*fs.readFile('/Users/zhaxiaobing/Documents/learn_NodeJS/demo-演示路径问题/1.txt','utf-8',function(err,data){
    if(err){
        return console.log('读取文件失败！');
    }
    console.log('读取文件成功了！');
    console.log(data);
})*/


// 使用__dirname
fs.readFile(__dirname+'/1.txt','utf-8',function(err,data){
    if(err){
        return console.log('读取文件失败！');
    }
    console.log('读取文件成功了！');
    console.log(data);
})


// 该文件所属的目录
console.log('@',__filename);