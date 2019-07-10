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

var sqlStr = "INSERT INTO employees( first_name, last_name, email, phone_number, job_id, salary, commission_pct, manager_id, department_id) " +
    "values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
var values = ['马', 'xiao云', 'www.taobao.com', '123456', 'IT_PROG', 12000, null, 100, '60'];
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
