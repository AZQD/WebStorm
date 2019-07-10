/**
 * Created by Administrator on 2016/7/2.
 */
var UserInformation=require("./UserInformation.js");

//定义用户信息格式

//添加用户信息
    var wukong=new UserInformation.UserInfo({
        userName:"wukong",
        password:"123456",
        gender:"male",
        email:"wukong@atguigu.com"
    });
    var bajie=new UserInformation.UserInfo({
        userName:"bajie",
        password:"abcdef",
        gender:"male",
        email:"bajie@atguigu.com"
    });


//定义一个数组，用来存放所有用户信息
    var users=[];
    function addUser(newUser){
        users.push(newUser);
    }
    exports.addUser=addUser;
//将wukong和bajie的信息添加到数组当中：
    addUser(wukong);
    addUser(bajie);

//定义一个函数，调用时打印所有用户信息
    function showUsers(){
        console.log(users);
    }
    exports.showUsers=showUsers;
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
    exports.isUserNameExist=isUserNameExist;


//验证个人信息是否正确
    function isUserCorrect(userName,password){
        var result=false;
        var userInfoTemp=isUserNameExist(userName);
        if(userInfoTemp){
            //密码是否正确

            //if(obj.password==password){
            if(userInfoTemp.password==password){
                result=true;
                return result;
            }else{
                return result;
            }
        }else{
            return result;
        }
    }
    exports.isUserCorrect=isUserCorrect;



