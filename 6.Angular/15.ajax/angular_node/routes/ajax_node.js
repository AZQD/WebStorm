/**
 * Created by Administrator on 2016/8/11.
 */
var express = require('express');
module.exports = function(router){
    router.get('/get', function(req, res, next){
        console.log('get()', req.query.username, req.query.pwd);
        var emps = [
            {name : 'Tom', age : 21, salary : 10000},
            {name : 'Tom2', age : 22, salary : 12000},
            {name : 'Tom3', age : 23, salary : 11000}
        ];
        res.json(emps);
    });
    router.post('/post', function(req, res, next){
        console.log('post()', req.body.username, req.body.pwd);
        var emps = [
            {name : 'Tom', age : 25, salary : 10000},
            {name : 'Tom2', age : 22, salary : 12000},
            {name : 'Tom3', age : 23, salary : 11000}
        ];
        res.json(emps);
    });

    router.get('/jsonp', function(req, res, next){
        console.log('get jsonp()', req.query.username, req.query.pwd);
        var callback = req.query.callback;
        var emps = [
            {name : 'Tom', age : 25, salary : 20000},
            {name : 'Tom2', age : 22, salary : 12000},
            {name : 'Tom3', age : 23, salary : 11000}
        ];
        res.send(callback+"("+JSON.stringify(emps)+')');
    });
};