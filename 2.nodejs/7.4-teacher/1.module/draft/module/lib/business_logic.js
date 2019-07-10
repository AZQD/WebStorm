
var url = require('url');
var qs = require('querystring');
var users = require('./users.js');


var pageLogin ='<!DOCTYPE html>                                      \
    <html lang="en">                                                \
    <head>                                                          \
    <meta charset="UTF-8">                                          \
    <title>login</title>                                            \
    </head>                                                         \
    <body>                                                          \
        <form method="post" action="/login">                        \
            <label for="userName">userName:</label>                 \
            <input type="text" id="userName" name="userName" ><br>  \
            <label for="password">password:</label>                 \
            <input type="text" id="password" name="password" ><br>  \
            <input type="submit" value="submit">                    \
    </form>                                                         \
    </body>                                                         \
    </html>';

var pageRegister ='<!DOCTYPE html>                                              \
    <html lang="en">                                                            \
    <head>                                                                      \
    <meta charset="UTF-8">                                                      \
    <title>login</title>                                                        \
    </head>                                                                     \
    <body>                                                                      \
    <form method="post" action="/register">                                     \
        <!--用户名-->                                                           \
        <label for="userName">userName:</label>                                 \
        <input type="text" id="userName" name="userName" ><br>                  \
        <!--密码-->                                                             \
        <label for="password">password:</label>                                 \
        <input type="text" id="password" name="password" ><br>                  \
        <!--确认密码-->                                                         \
        <label for="confirmPassword">confirm :</label>                          \
        <input type="text" id="confirmPassword" name="confirmPassword" ><br>    \
        <!--性别-->                                                             \
        <label for="gender">gender:</label>                                     \
        <select id="gender" name="gender">                                      \
            <option>male</option>                                               \
            <option>female</option>                                             \
        </select> <br>                                                          \
        <!--邮箱-->                                                             \
        <label for="email">email:</label>                                       \
        <input type="text" id="email" name="email" ><br>                        \
        <!--提交-->                                                             \
        <input type="submit" value="submit">                                    \
    </form>                                                                     \
    </body>                                                                     \
    </html>';



function login_post(req, res){

    //定义并且初始化变量
    var qsObj = '-1';
    var userName = '-1';
    var password = '-1';

    //获取请求体信息
    var data = '';
    req.on('data', function(chunk){
        data += chunk;
    });
    req.on('end', function(){
        qsObj= qs.parse(data);
        //获取用户输入的数据
        userName = qsObj.userName;
        password = qsObj.password;
        console.log(userName, password);

        //检查用户输入项
        if(!userName || !password){
            //如果用户输入的信息为空
            //那么返回重新输入
            var phrase = '用户名密码不能为空';
            console.log(phrase);
            res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
            res.end(phrase);
        }else {
            //如果用户输入的信息不空
            /*
             如果用户名不存在 或者 密码不匹配
             那么返回：用户名密码不正确，请重新登录
             如果用户密码存在并且匹配
             那么返回：登录成功，可以开始商业逻辑
             */
            var userInfoTemp = {
                userName : userName,
                password : password
            };
            var isCorrect = users.isUserInfoCorrect(userInfoTemp);
            //判断用户是否正确
            if(!isCorrect){
                //如果用户名不存在 或者 密码不匹配
                //那么返回：用户名密码不正确
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end('用户名密码不正确，请重新登录');
            }else {
                //如果用户密码存在并且匹配
                //那么返回：登录成功，可以开始商业逻辑
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end('登录成功，可以开始商业逻辑');
            }
        }
    });
}
exports.login_post = login_post;


function login_get(req, res){
    console.log('method get');
    //显示页面
    res.writeHead(200, 'success',{
        'Content-Type' : 'text/html;charset=utf8',
        'Content-Length' : pageLogin.length
    });
    res.end(pageLogin);
}
exports.login_get = login_get;


function register_post(req, res){

    //定义并且初始化变量
    var qsObj = '-1';
    var userName = '-1';
    var password = '-1';
    var confirmPassword = '-1';
    var gender = '-1';
    var email = '-1';

    //获取请求体信息
    var data = '';
    req.on('data', function(chunk){
        data += chunk;
    });
    req.on('end', function(){
        qsObj= qs.parse(data);
        //获取用户输入的数据
        userName = qsObj.userName;
        password = qsObj.password;
        confirmPassword = qsObj.confirmPassword;
        gender = qsObj.gender;
        email = qsObj.email;
        console.log(userName, password, gender, email);

        //检查用户输入项
        if(!userName || !password || !confirmPassword){
            //如果用户输入的信息为空
            //那么返回重新输入
            var phrase = '用户名、密码、确认密码，不能为空';
            console.log(phrase);
            res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
            res.end(phrase);
        }else {
            //如果用户输入的信息不空
            /*
             如果两次密码不一致
             那么返回：两次密码不一致，请重新注册
             如果用户名已经存在
             那么返回：用户名已经存在，请重新注册
             否则
             注册成功，返回：注册成功，可以开始商业逻辑
             */
            var userInfoTemp = {
                userName : userName,
                password : password,
                gender : gender,
                email :email
            };
            if(password != confirmPassword){
                // 如果两次密码不一致
                phrase = '两次密码不一致，请重新注册';
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end(phrase);
            }else if(users.isUserNameExist(userName)) {
                // 如果用户名已经存在
                phrase = '用户名已经存在，请重新注册';
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end(phrase);
            }else {
                // 符合条件可以注册
                users.addUser(userInfoTemp);
                phrase = '注册成功，可以开始商业逻辑';
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end(phrase);
                users.queryUserInfo();
            }
        }
    });
}
exports.register_post = register_post;


function register_get(req, res){
    console.log('method get');
    //显示页面
    res.writeHead(200, 'success',{
        'Content-Type' : 'text/html;charset=utf8',
        'Content-Length' : pageRegister.length
    });
    res.end(pageRegister);
}
exports.register_get = register_get;









