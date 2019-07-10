
var daoMysql = require('./mysql_pool.js');




//cb : callback(err, data)
function queryAll( cb ){
    var sql = 'SELECT * FROM jobs';
    daoMysql.query(sql, [], function(err, data){
        if(err){
            cb(err, null);
        }else {
            cb(null, data);
        }
    });
}
exports.queryAll = queryAll;

//真的去查询数据库
function queryPartial(number, cb){
    var sql = 'SELECT * FROM jobs LIMIT 0, ?';
    daoMysql.query(sql, [number], function(err, data){
        if(err){
            cb(err, null);
        }else {
            cb(null, data);
        }
    });
}
exports.queryPartial = queryPartial;