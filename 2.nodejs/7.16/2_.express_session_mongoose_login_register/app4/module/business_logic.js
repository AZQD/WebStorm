
var url = require('url');
var qs = require('querystring');
var fs = require('fs');

var users = require('./users.js');



//文件路径
var PAGE_LOGIN = './1.pages/1.login.html';
var PAGE_REGISTER = './1.pages/2.register.html';




//login
//post
function login_post(req, res){
    console.log('login_post');


    var userName = '-1';
    var password = '-1';

    //body 存放   form表单数据
    userName = req.body.userName;
    password = req.body.password;
    console.log(userName, password);

    //商业逻辑
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
        users.isUserInfoCorrect(userInfoTemp, function(isCorrect){
            //判断用户是否正确
            if(!isCorrect){
                //如果用户名不存在 或者 密码不匹配
                //那么返回：用户名密码不正确
                res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                res.end('用户名密码不正确，请重新登录');
            }else {
                //如果用户密码存在并且匹配
                //那么返回：登录成功，可以开始商业逻辑
                //res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                //res.end('登录成功，可以开始商业逻辑');

                //一旦登录成功，那么就把 userInfo 注册到 session 上，下次，用户再想 登录的时候，直接跳到首页，开始商业逻辑
                users.getUserInfo(userName, function(err, userInfo){
                    if(err){
                        console.error(err);
                        res.end(err);   //开发中，直接把error 打印出来，如果是上线项目不能这么做
                    }else {
                        req.session.userInfo = userInfo;
                        //跳转到用户自己的首页
                        res.redirect('/user_index.html');
                    }
                });
            }
        });
    }

/*
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
            /!*
             如果用户名不存在 或者 密码不匹配
             那么返回：用户名密码不正确，请重新登录
             如果用户密码存在并且匹配
             那么返回：登录成功，可以开始商业逻辑
             *!/
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
    */
}
//get
function login_get(req, res){
    console.log('login_get');
    res.redirect('/login.html');    //重定向的方式
}


//register
//get
function register_get(req, res){
    console.log('register_get');
    res.redirect('/register.html'); //重定向回来，静态资源服务，响应这个请求，把这个页面返回

}
//post
function register_post(req, res){
    console.log('register_post');

    //定义并且初始化变量
    var userName = '-1';
    var password = '-1';
    var confirmPassword = '-1';

    var gender = '-1';
    var email = '-1';
    userName = req.body.userName;
    password = req.body.password;
    confirmPassword = req.body.confirmPassword;
    gender = req.body.gender;
    email = req.body.email;
    console.log(userName, password, gender, email);

    //商业逻辑
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
        }else {
            users.isUserNameExist(userName, function(err, isExist){
                if(isExist) {
                    // 如果用户名已经存在
                    phrase = '用户名已经存在，请重新注册';
                    res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                    res.end(phrase);
                }else {
                    // 符合条件可以注册
                    users.addUser(userInfoTemp, function(err){
                        if(err){
                            console.error(err);
                        }else {
                            res.redirect('/login'); //跳转到登录页面
                        }
                    });
                    /*
                     phrase = '注册成功，可以开始商业逻辑';
                     res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
                     res.end(phrase);
                     */

                    //注册 session 信息
                    //req.session.userInfo = users.getUserInfo(userName);   //不加入session

                    //跳转到用户自己的首页
                    //res.redirect('/user_index.html');

                    //跳转到 登录页面
                    //res.redirect('/login');

                    //users.queryUserInfo();
                }
            });
        }
    }
/*
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
            /!*
             如果两次密码不一致
             那么返回：两次密码不一致，请重新注册
             如果用户名已经存在
             那么返回：用户名已经存在，请重新注册
             否则
             注册成功，返回：注册成功，可以开始商业逻辑
             *!/
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
    });*/
}

function logout(req, res, next){
    req.session.destroy();
    res.redirect('/login.html');
}


exports.login_get = login_get;
exports.login_post = login_post;
exports.register_get = register_get;
exports.register_post = register_post;
exports.logout = logout;
















