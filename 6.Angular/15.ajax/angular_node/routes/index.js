var express = require('express');
var router = express.Router();
var ajax_node = require('./ajax_node');
ajax_node(router);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
处理 ajax get请求
 */
router.get('/angular_node/get', function(req, res, next) {
  console.log(req.query.username, req.query.age);
  var emps = [
    {name : 'Tom', age : 22, salary : 10000},
    {name : 'Tom2', age : 24, salary : 11000},
    {name : 'Tom3', age : 23, salary : 12000}
  ];
  res.json(emps);
});

/*
 处理 ajax post请求
 */
router.post('/angular_node/post', function(req, res, next) {
  console.log(req.body.username, req.body.age);
  var emps = [
    {name : 'JACK', age : 22, salary : 10000},
    {name : 'JACK2', age : 24, salary : 11000},
    {name : 'JACK3', age : 23, salary : 12000}
  ];
  //res.set('Access-Control-Allow-Origin', '*');
  res.json(emps);
});

/*
 处理jsonp请求
 */
router.get('/angular_node/jsonp', function(req, res, next) {
  console.log(req.query.username, req.query.age);
  var callback = req.query.callback;
  var emps = [
    {name : 'Tom', age : 22, salary : 10000},
    {name : 'Tom2', age : 24, salary : 11000},
    {name : 'Tom3', age : 23, salary : 12000}
  ];
  res.send(callback+'('+JSON.stringify(emps)+')');
});

module.exports = router;


