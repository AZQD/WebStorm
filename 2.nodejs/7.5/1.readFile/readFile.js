

var fs = require('fs');
console.log(fs);

fs.readFile('白雪公主.txt', 'utf8', function(err, data){
    if(err) {
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log('readFile是异步，我先被打印出来！！！');






