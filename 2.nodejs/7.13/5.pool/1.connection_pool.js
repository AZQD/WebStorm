var mysql = require('mysql');

var pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myemployees'
});
//可以监听connection事件
pool.on('connection', function(connection){
    console.log('connection');
});
//商业逻辑
pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM jobs Limit 0, 2',function(err, result){
        console.log(result);
        connection.release();
    });
});