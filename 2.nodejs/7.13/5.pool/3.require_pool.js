var pool = require('./2.pool_module.js');

var sql1 = 'SELECT * FROM employees WHERE salary > ? ORDER BY salary DESC LIMIT 0, 2';
pool.query(sql1, [5000], function(err, result){
    console.log(result);
});
var sql2 = 'SELECT * FROM jobs ORDER BY min_salary ASC LIMIT ?, ?';
pool.query(sql2, [0, 2], function(err, result){
    console.log(result);
});

