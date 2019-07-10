/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");
var url=require("url");
var qs=require("querystring");

var pageRegister='<!DOCTYPE html>\
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
    </html>';

var server=http.createServer(requestHandler);
server.listen(3000, function () {

    console.log("server start work");
});
function requestHandler(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var pathName=urlObj.pathname;
    var method=req.method;
    //console.log(pathName);
    switch (pathName){
        case "/":
        case "/favicon.ico":
        case "/register":
            //console.log("register");
            if("GET"==method){
                res.writeHead(200,"success");
                res.end(pageRegister);
            }else if("POST"==method){
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
                            var userInfo=isUserNameExist(userName);
                            console.log("***********");
                            if(userInfo){
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
                                addUser(objInfo);
                                showUsers();
                                phrase="恭喜您注册成功，可以开始商业逻辑！";
                                res.writeHead(200,"success",{
                                    "content-type":"text/plain;charset=utf8"
                                });
                                res.end(phrase);
                            }
                        }
                    }
                });
            }
            break;
        default:
            res.writeHead(404,"not found");
            res.end("404 not found");
    }
}



//定义用户信息格式
//注意：参数userInfoObj是一个对象！
function UserInfo(userInfoObj){
    this.userName=userInfoObj.userName;
    this.password=userInfoObj.password;
    this.gender=userInfoObj.gender;
    this.email=userInfoObj.email;
}
//添加用户信息
var wukong=new UserInfo({
    userName:"wukong",
    password:"123456",
    gender:"male",
    email:"wukong@atguigu.com"
});
var bajie=new UserInfo({
    userName:"bajie",
    password:"abcdef",
    gender:"male",
    email:"bajie@atguigu.com"
});

//更改信息  在本次文档中暂时没有用
UserInfo.prototype.modify=function(userInfoObj){
    if(userInfoObj.userName){
        this.userName=userInfoObj.userName;
    }
    if(userInfoObj.password){
        this.password=userInfoObj.password;
    }
    if(userInfoObj.gender){
        this.gender=userInfoObj.gender;
    }
    if(userInfoObj.email){
        this.email=userInfoObj.email;
    }
};

//定义一个数组，用来存放所有用户信息
var users=[];
function addUser(newUser){
    users.push(newUser);
}
//将wukong和bajie的信息添加到数组当中：
addUser(wukong);
addUser(bajie);

//定义一个函数，调用时打印所有用户信息
function showUsers(){
    console.log(users);
}
//如果不需要打印，可以注掉。
showUsers();


//检查用户是否存在，如果存在，返回用户信息，如果不存在，返回null
function isUserNameExist(userName){
    var result=null;
    for(var i=0;i<users.length;i++){
         var obj=users[i];
        if(obj.userName==userName){
            //用户名已经存在
            result=obj;
            break;
        }
    }
    return result;
}

//验证个人信息是否正确
function isUserCorrect(userName,password){
    var result=false;
    var userInfo=isUserNameExist(userName);
    if(userInfo){
        //密码是否正确
        if(userInfo.password==password){
            result=true;
            return result;
        }else{
            return result;
        }
    }else{
        return result;
    }
}