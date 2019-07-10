var url = require('url');
var qs = require('querystring');
var fs = require('fs');

var users = require('./users.js');
function login_get(req, res){
    console.log('login_get');
    //重定向，直接找到html文件
    res.redirect('./login.html');
}
module.exports.login_get = login_get;


function register_get(req, res){
    console.log('register_get');
    res.redirect('/register.html');
}
module.exports.register_get = register_get;

function login_post(req, res){
    console.log('login_post');
    var userName = '-1';
    var password = '-1';
    //直接用body的方法，获取html中的useName和password的值
    userName = req.body.userName;
    password = req.body.password;
    console.log(userName, password);
    if(!userName || !password){
        var phrase = '用户名密码不能为空';
        console.log(phrase);
        res.writeHead(200, 'success', {
            'content-type':'text/plain;charset=utf8'
        });
        res.end(phrase);
    }else{
        var userInfoTemp = {
            userName : userName,
            password : password
        };
        var isCorrect = users.isUserInfoCorrect(userInfoTemp);
        if(!isCorrect){
            //如果用户名不存在 或者 密码不匹配
            //那么返回：用户名密码不正确
            res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
            res.end('用户名密码不正确，请重新登录');
        }else {
            //如果用户密码存在并且匹配
            //那么返回：登录成功，可以开始商业逻辑
            //res.writeHead(200, {'content-type':'text/plain;charset=utf8',
            //    'set-cookie' : 'userName=' + userName  });
            //res.end('登录成功，可以开始商业逻辑');
            req.session.userInfo = users.getUserInfo(userName);
            res.redirect('/user_index.html');
            users.queryUserInfo();
        }
    }

}
module.exports.login_post = login_post;






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
            //phrase = '注册成功，可以开始商业逻辑';
            //res.writeHead(200, {'content-type':'text/plain;charset=utf8'});
            //res.end(phrase);
            req.session.userInfo = users.getUserInfo(userName);
            res.redirect('/user_index.html');
            users.queryUserInfo();
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
exports.register_post = register_post;

function logout(req, res, next){
    req.session.destroy();
    res.redirect('/login.html');
}
exports.logout = logout;