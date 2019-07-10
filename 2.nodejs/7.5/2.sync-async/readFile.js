var fs = require('fs');

//即使名字写错，也不会抛出异常
fs.readFile('小天鹅.txt', 'utf8', function (err,data) {
    console.log('123');
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }

});
console.log('readFile是异步，先打印这句话。。。');