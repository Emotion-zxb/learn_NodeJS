const fs = require('fs');
fs.writeFile('./日记.txt','查小兵\n24',function (err){
    if (err){
        return console.log('写入失败');
    }
    return console.log('写入成功');
})
