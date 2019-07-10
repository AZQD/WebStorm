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

//var sqlStr = "UPDATE  employees SET last_name =?, first_name = ?, email = ?, WHERE employee_id = 233";
var sqlStr = " DELETE FROM  employees  WHERE employee_id = ? ";
var values = ['234'];
connection.query(sqlStr, values, function(error, results, fields){
    if(error){
        console.error(error);
        return;
    }
    console.log(results);
    console.log(fields);
});


connection.end(function(err){
    if(err){
        console.error(err);
        console.trace('err');
    }
    console.log('The connection is terminated now');
});
