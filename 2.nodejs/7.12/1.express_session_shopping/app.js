var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//cookieParser 转化cookie
//cookie-parser 几乎所有express都用
var cookieParser = require('cookie-parser');
//新添加的express-session
//express-session  必须在cookie-parser后面
var expressSession = require('express-session');
var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');
var myRouter = require('./routes/myRouter');
var credentials = require('./Credential/credentials.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cookie使用秘钥进行加密
app.use(cookieParser(credentials.cookieSecret));
app.use(expressSession({
    secret: 'keyboard cat',
    //todoList为cookie name, 可以打开浏览器观察
    name: 'todoList',
    //每次请求都重新设置session cookie, 假设你的cookie是30分钟过期，
    //每次请求都会再设置30分钟
    resave: true,
    //无论有没有session cookie,每次请求都设置一个session cookie,
    //默认给一个标示为 connect.sid
    saveUninitialized: false,
    //过期时间，30分钟
    cookie: {maxAge: 1000 * 60 *30}
}));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

//app.use('/', myRouter);
//是不是可以不加/
app.use(myRouter);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

module.exports = app;
