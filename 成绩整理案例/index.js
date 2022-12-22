const fs = require('fs');
fs.readFile('./成绩-未整理.txt',function (err,data){
    if(err){
        return console.log('读取失败！',err);
    }
    /*
    * 处理
    * */
    data = data.toString();
    const arr = data.split(' ');
    const newArr = [];
    arr.forEach(i => {
        newArr.push(i.replace('=',': '));
    })
    let newStr = newArr.join('\r\n');
    /*
        写入：成绩-已整理.txt
    */
    fs.writeFile('./成绩-已整理.txt',newStr,function (err){
        if (err){
            return console.log('写入出错');
        }
        console.log('写入成功');
    })
    console.log(newStr);
})
