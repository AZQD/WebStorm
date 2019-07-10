/**
 * Created by Administrator on 2016/7/1.
 */
var http=require("http");
var url=require("url");
var qs=require("querystring");

var pageLogin='<!DOCTYPE html>\
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
    </html>';

var server=http.createServer(requestHandle);
server.listen(3000,function(){
    console.log("server start work");
});
function requestHandle(req,res){
    var urlStr=req.url;
    var urlObj=url.parse(urlStr,true);
    var pathName=urlObj.pathname;
    var method=req.method;
    //console.log(method);
    switch(pathName){
        case "/favicon.ico":
            /*console.log("tubiao");
            //break;
            console.log(111111111111111111111);
            console.log(method);
            console.log(111111111111111111111);*/
        case "/":
            /*//console.log("index");
            //break;
            console.log(2222222222222222);
            console.log(method);
            console.log(2222222222222222);*/
        case "/login":
            //console.log("kaishile");
            /*console.log(333333333333333333);
            console.log(method);
            console.log(3333333333333333333);*/
            if("GET"==method){
                res.writeHead(200,"success",{
                    "content-type":"text/html;charset=utf8"
                }
                );  //此时不可以加content-type，否则HTML就转化为文本了。
                res.end(pageLogin);
            }else if("POST"==method){
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
                        var isCorrect=isUserCorrect(useName,password);
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

            break;
        default:
            console.log(404);
            res.writeHead(404,"not found"); // 只要这句话运行，头信息就被发送。
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


/**
 *
 * @param userInfoObj
 */

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