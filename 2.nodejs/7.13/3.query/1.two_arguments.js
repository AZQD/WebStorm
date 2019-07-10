var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myemployees'
});

connection.connect(function(err){
    if(err){
        console.error('error connecting: '+ err.stack);
        return;
    }
    console.log('connected as id '+ connection.threadId);
});
//查询
var sqlStr = 'SELECT * FROM jobs';
//函数中存在两个参数
connection.query(sqlStr, function(error, results, fieleds){
    if(error){
        console.error(error);
        return;
    }
    console.log(results[0]);
    console.log(fieleds[0]);
});

connection.end(function(err){
    if(err){
        console.error(err);
        console.trace('err');
    }
    console.log('The connection is terminated now ');
});