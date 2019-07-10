var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'myemployees'
});

connection.connect(function(err){
    if(err){
        console.error('error connecting: '+ err.track);
        return;
    }
    console.log('connection as id '+ connection.threadId);
});

var sqlStr = 'SELECT * FROM jobs WHERE min_salary BETWEEN ? AND ? LIMIT ?, ?';
connection.query(sqlStr, [3000, 5000, 0, 10], function(error, results, fields){
    if(error){
        console.error(error);
        return;
    }
    console.log('results.length= '+ results.length);
    console.log(results[0]);
    console.log('fields.length= '+ fields.length);
    console.log(fields[0]);
});


connection.end(function(err){
    if(err){
        console.error(err);
        console.trace('err');
    }
    console.log('The connection is terminated now');
});
