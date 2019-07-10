/**
 * 与 6.calculator_add_form_post_2.js 这个文件对比，
 * 1.本文件中访问区分 post method 和 get method
 *      必须同时匹配 路径名 和 方法名 才能进入到对应的处理函数之中
 *          1.路径名：'/fourOperation' 并且 方法名：'POST'   会进入到    post_fourOperation 函数中
 *          2.路径名：'/fourOperation' 并且 方法名：'GET'    会进入到    get_fourOperation 函数中
 *2.本文件根据文件路径返回 两种 form 表单页面
 *      1.第一种  method POST：
 *          文件路径：'/' || '/index' || '/post'
 *      2.第二种  method GET：
 *          文件路径：'/get'
 */
//引入 模块 ====》 对象
var http = require('http');
var url = require('url');
var qs = require('querystring');    //查询字符串 对象，方法

//form 表单用 post 方法提交
//使用 接收请求体

//网页 post form
var pagePost = '<!DOCTYPE html>                              \
    <html lang="en">                                        \
    <head>                                                  \
    <meta charset="UTF-8">                                  \
    <title>add_form_post</title>                            \
    </head>                                                 \
    <body>                                                  \
        <form method="post" action="/fourOperation">        \
            <label for="op">op</label>                      \
            <select id="op" name="op">                      \
                <option>add</option>                        \
                <option>subtract</option>                   \
                <option>multiply</option>                   \
                <option>divide</option>                     \
            </select><br>                                   \
            <label for="first">a:</label>                   \
            <input type="text" id="first" name="a" ><br>    \
            <label for="second">b:</label>                  \
            <input type="text" id="second" name="b" ><br>   \
            <input type="submit" value="submit">            \
        </form>                                             \
    </body>                                                 \
    </html>';


//网页 post form
var pageGet = '<!DOCTYPE html>                              \
    <html lang="en">                                        \
    <head>                                                  \
    <meta charset="UTF-8">                                  \
    <title>add_form_get</title>                             \
    </head>                                                 \
    <body>                                                  \
        <form method="get" action="/fourOperation">         \
            <label for="op">op</label>                      \
            <select id="op" name="op">                      \
                <option>add</option>                        \
                <option>subtract</option>                   \
                <option>multiply</option>                   \
                <option>divide</option>                     \
            </select><br>                                   \
            <label for="first">a:</label>                   \
            <input type="text" id="first" name="a" ><br>    \
            <label for="second">b:</label>                  \
            <input type="text" id="second" name="b" ><br>   \
            <input type="submit" value="submit">            \
        </form>                                             \
    </body>                                                 \
    </html>';

//创建服务器

//参数就是函数， 回调函数： 执行时机： 每当有请求到达的时候，就执行一遍
//两个参数：1.req， 2.res
//   request, response

//1. 函数抽出来
//2. form 表单

//抽取函数：
//1.把功能封装在一个位置： 以后类似功能，直接拿来用
//2.代码更加清晰简洁
//基本原则：一个函数只做一件事，一个函数就一个功能点
//抽取：
//  1.输入    queryString
//  2.功能：运算
        //
//  3.输出    运算结果 ： result
function post_fourOperation( req, res ){
    //一个路径
    //保存得到的内容
    var dataStr = '';
    // on 'data' //事件  //回调函数
    req.on('data', function(chunk){
        //chunk     buffer
        dataStr += chunk;
    });
    // on 'end' //所有数据都发送结束的时候，系统自动激发 ‘end’
    req.on('end', function(){

        console.log('--------------');
        console.log(dataStr);

        //dataStr   //op=add&a=1&b=2
        //qs    parse 把一个字符串 转成 对象
        var queryString = qs.parse(dataStr);    //queryString 是一个对象
        console.log(queryString);

        var a = queryString.a;  //取得值   a
        var b = queryString.b;  //取得值   b
        var operation = queryString.op;   //取得值   op    operation：操作 add
        a = Number.parseInt(a); //转化为数字类型
        b = Number.parseInt(b);
        var result = -999; //结果 result
        switch (operation){ //字符串
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                result = a / b;
                break;
            default:
                console.error('op is wrong');
        }
        // 数字类型 result 转为 字符串类型 result
        result = result.toString();

        //res.end()     接受两种类型 string buffer
        res.end(result);    //1.数据发给浏览器     2.结束影响，显示的结束响应

    });
    //return result;
}
function get_fourOperation( req, res ){
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    console.log(urlObj);

    var a = urlObj.query.a;
    var b = urlObj.query.b;
    var operation = urlObj.query.op;
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    var result = 0;


    switch (operation){
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        default:
            console.error('op is wrong');
    }
    result = result.toString();
    res.end(result);    //1.把参数传给浏览器 2.结束本次响应
}

http.createServer(function(req, res){
    //得到 url
    var urlStr = req.url;
    //var urlObj = url.parse(urlStr);
    //解析 url(浏览器发来的字符串，地址栏当中那个字符串)    url模块，node自带的模块：解析 url 字符串
    //parse： 把字符串转化成对象： string， 第二个参数是否要把，queryString（查询字符串）解析为对象
    var urlObj = url.parse(urlStr, true);
    //console.log(urlObj);

    //pathname : url里面的文件路径
    //路由分发
    if('/favicon.ico' == urlObj.pathname){
        //返回 图标
        //目前我们不会不读写文件
    }
    else if('/' == urlObj.pathname || '/index' == urlObj.pathname || '/post' == urlObj.pathname){
        //文件路径：'/' || '/index' || '/post'
        console.log('index page post');  //程序跑到这里
        res.end(pagePost);  //把首页返回     内存中的 字符串 ==》 网页 html
    }
    else if('/get' == urlObj.pathname){
        //文件路径：'/get'
        console.log('get');  //程序跑到这里
        res.end(pageGet);  //把首页返回     内存中的 字符串 ==》 网页 html
    }
    else if('/fourOperation' == urlObj.pathname  && 'POST' == req.method ){
        //用 post 处理方法
        post_fourOperation( req, res );
    }
    else if('/fourOperation' == urlObj.pathname  && 'GET' == req.method ){
        //用 get 处理方法
        get_fourOperation( req, res );
    }
    else {
        //处理 其他的 不在我们功能点涉及范围内的 文件路径
        res.end('404 not found'); //字符串
    }

}).listen(3000);    //监听
console.log('after createSever');