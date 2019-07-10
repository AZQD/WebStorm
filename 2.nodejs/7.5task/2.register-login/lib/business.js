/**
 * Created by Administrator on 2016/7/2.
 */

var url = require('url');
var qs = require('querystring');
var users=require("./users");
var fs=require('fs');

/*var pageRegister='<!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>Title</title>\
    </head>\
    <body>\
    <form action="/register" method="post">\
    <label for="userName">userName:</label>\
<input type="text" id="userName" name="userName"><br/>\
    <label for="password">password:</label>\
<input type="text" id="password" name="password"><br/>\
    <label for="confirm">confirm :</label>\
<input type="text" id="confirm" name="confirmPassword"><br/>\
    <label for="gender">gender&nbsp;:</label>\
<select name="gender" id="gender">\
    <option>male</option>\
    <option>female</option>\
    </select><br/>\
    <label for="email">email&nbsp; :</label>\
<input type="text" id="email" name="email"><br/>\
    <input type="submit" value="submit">\
    </form>\
    </body>\
    </html>';*/

/*var pageLogin='<!DOCTYPE html>\
    <html lang="en">\
    <head>\
    <meta charset="UTF-8">\
    <title>Title</title>\
    </head>\
    <body>\
    <form action="/login" method="post">\
    <label for="useName">useName :</label>\
<input type="text" id="useName" name="useName"><br/>\
    <label for="password">password:</label>\
<input type="text" id="password" name="password"><br/>\
    <input type="submit" value="submit">\
    </form>\
    </body>\
    </html>';*/

/*var PAGE_LOGIN='./pages/pageLogin.html';
var PAGE_REGISTER='./pages/pageRegister.html';*/

var root='./'+'/pages';
//var PAGE_REGISTER='./pages/pageRegister.html';

function register_get(req,res){

    res.writeHead(200,"success");
    //res.end(pageRegister);
    var path3=root+'/pageRegister.html';
    fs.readFile(path3,function(err,data){
        if(err){
            console.error(err);
        }else {
            res.end(data);
            console.log('data2已经打印出来');
        }

    });
}
exports.register_get=register_get;

//注意：定义的变量放在函数内部，不要放到全局变量当中！！！
function register_post(req,res){

    var dataStr="";
    var phrase="";
    //thunk这个参数可以换
    req.on("data",function(thunk){
        dataStr+=thunk;
        //useName=&password=&confirmPassword=&gender=male&email=
        //console.log(dataStr);
    });
    req.on("end",function(){
        var dataObj=qs.parse(dataStr);
        //console.log(dataObj);
        var userName=dataObj.userName;
        var password=dataObj.password;
        var confirmPassword=dataObj.confirmPassword;
        var gender=dataObj.gender;
        var email=dataObj.email;
        //接下来进行判断：
        if(!userName || !password || !confirmPassword){
            phrase="用户名，密码，验证密码不能为空，请重新输入！";
            res.writeHead(200,"success",{
                "content-type":"text/plain;charset=utf8"
            });
            res.end(phrase);
        }else{
            if(password!=confirmPassword){
                phrase="两次输入密码不一致，请重新输入！";
                res.writeHead(200,"success",{
                    "content-type":"text/plain;charset=utf8"
                });
                res.end(phrase);
            }else{
                var userInfoTemp=users.isUserNameExist(userName);
                console.log("***********");
                if(userInfoTemp){
                    phrase="用户名已经存在，请重新输入！";
                    res.writeHead(200,"success",{
                        "content-type":"text/plain;charset=utf8"
                    });
                    res.end(phrase);
                }else{
                    var objInfo={
                        userName:userName,
                        password:password,
                        gender:gender,
                        email:email
                    };
                    console.log("--------------------------");
                    users.addUser(objInfo);
                    users.showUsers();
                    /*phrase="恭喜您注册成功，可以开始商业逻辑！";
                     res.writeHead(200,"success",{
                     "content-type":"text/plain;charset=utf8"
                     });
                     res.end(phrase);*/
                    console.log("注册成功，可以进行登录了！");
                    //res.end(pageLogin);
                    var path1=root+'/pageLogin.html';
                    fs.readFile(path1,function(err,data){
                        if(err){
                            console.error(err);
                        }else{
                            res.end(data);
                            console.log('data1已经打印');
                        }

                    });
                }
            }
        }
    });
}
exports.register_post=register_post;

function login_get(req,res){
    res.writeHead(200,"success");  //此时不可以加content-type，否则HTML就转化为文本了。
    //res.end(pageLogin);
    var path2=root+'/pageLogin.html';
    fs.readFile(path2,function(err,data){
        if(err){
            console.error(err);
        }else{
            res.end(data);
            console.log('data3已经打印');
        }
    });
}
exports.login_get=login_get;

////注意：定义的变量放在函数内部，不要放到全局变量当中！！！
function login_post(req,res){

    var data="";
    var pharse="";
    req.on("data",function(chunk){
        data+=chunk;
        //console.log(data);  //useName=34&password=34
    });
    req.on("end",function(){
        var dataObj=qs.parse(data);
        //console.log(dataObj);  //{ useName: '12', password: '12' }
        var useName=dataObj.useName;
        var password=dataObj.password;

        if(!useName || !password){
            pharse="用户名或者密码不能为空，请重新输入!";
            res.writeHead(200,"success",{
                "content-type":"text/plain;charset=utf8"
            });
            res.end(pharse);
        }else{
            //用户名和密码有值：
            var isCorrect=users.isUserCorrect(useName,password);
            if(isCorrect){
                pharse="登陆成功，可以进行业务逻辑！";
                res.writeHead(200,"success",{
                    "content-type":"text/plain;charset=utf8"
                });
                res.end(pharse);
            }else {
                pharse="用户名和密码不匹配，请重新输入！";
                res.writeHead(200,"success",{
                    "content-type":"text/plain;charset=utf8"
                });
                res.end(pharse);
            }
        }
    });
}
exports.login_post=login_post;