var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myemployees'
});
//真的去连接
connection.connect(function(err){
    if(err){
        console.error('error connecting : '+ err.stack);
        return;
    }
    console.log('connected as id '+ connection.threadId);

});
// 正常关闭
connection.end(function(err){
    if(err){
        console.error('err');
        console.trace('err');
    }
    console.log('The connection is terminated now');
});

