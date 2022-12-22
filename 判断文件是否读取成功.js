const fs = require('fs');
fs.readFile('./日记.txt',function (err,data) {
    // console.log('err',err);
    // console.log('data',data);
    if(err){
        return console.log('读取失败！');
    }
    console.log('读取成功！');
})
