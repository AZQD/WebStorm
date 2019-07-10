//var UserInfo = require('./UserInfo.js');
//
//var users = [];
//
//function isUserNameExist(userName){
//    var result = null;
//    var isExist = false;
//    for(var i = 0; i < userName.length; i++){
//        var obj = users[i];
//        if(obj.useName = userName){
//            isExist = true;
//            result = obj;
//            break;
//        }
//    }
//    return result;
//}
//
//
//
//function isUserInfoCorrect(userInfoObj){
//    var userName = userInfoObj.userName;
//    var password = userInfoObj.password;
//
//    var userInfo = isUserNameExist(userName);
//    if(!userInfo){
//        return false;
//    }else {
//        if(password != userInfo.password){
//            return false;
//        }else {
//            return true;
//        }
//    }
//}

var UserInfo = require('./UserInfo.js');

var fs = require('fs');
var USER_FILE_NAME = '../dao/users.txt';

//数组存储所有用户数据
// 我们不希望外部可以直接访问修改我们的原始数据
// 所有的数据访问都应该通过暴露的函数来做，这样我们才能控制访问，保证数据的安全
// 例如：目前， 我们只提供增加数据操作，那么用户就不可能机会删除数据
//              试想，如果我们暴露了，users 出去。那么，用户想要删除数据，他们就可以做到。


var users = [];
initUsers();
/**
 * 将用户信息写入文件
 * @param userInfo
 */
function saveUser(userInfo){
    //写入文件
    fs.writeFile(USER_FILE_NAME, userInfo, {flag:'a'}, function(err){
        if(err){
            console.error(err);
        }
    });
}

function initUsers(){
    //初始化变量
    var separater = '$$';
    var values = null;
    var userObj = {};
    var userInfo = null;

    //读文件
    fs.readFile(USER_FILE_NAME, 'utf8', function(err, data){
        if(err){
            console.error(err);
        } else {
            console.log('---------------------------');
            console.log(data);
            //把文件中的文件按照行进行分割，于是得到一个数组，数组中的每一个元素都是文件中的一行
            var datas = data.split('\n');
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
            //for 循环是将每一行都拿出来，然后，将这一行做操作
            for(var i=0; i<datas.length; i++){
                //对于某一行来说，按照分割符号，将信息分开
                values = datas[i].split(separater);
                //建立一个空对象
                userObj = {};
                //对这个空对象，把信息附着上去
                userObj.userName = values[0];
                userObj.password = values[1];
                userObj.gender= values[2];
                userObj.email = values[3];
                //使用这个对象 new 一个 UserInfo
                userInfo = new UserInfo(userObj);
                //将 得到 userInfo 添加到 users 数组中
                users.push(userInfo);

            }
        }
    });
}

/**
 * 检查用户名是否存在
 * @param userName
 * @returns {object} userInfo
 */
function isUserNameExist(userName){
    var result = null;
    var isExist = false;
    for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        if(obj.userName == userName){
            isExist = true;
            result = obj;
            break;
        }
    }
    return result;
}

/**
 *检查用户是否存在
 * @param userInfoObj
 * @returns {boolean}
 */
function isUserInfoCorrect(userInfoObj){
    var userName = userInfoObj.userName;
    var password = userInfoObj.password;

    var userInfo = isUserNameExist(userName);
    //检查 userInfo 是否存在
    if(!userInfo){
        //如果 userInfo 不 存在
        return false;
    } else {
        //如果 userInfo 存在
        //继续判断密码
        if(password != userInfo.password){
            return false;
        }else {
            return true;
        }
    }
}

/**
 * 添加用户
 * @param userInfoObj
 */
function addUser(userInfoObj){
    var userInfo = null;
    if(userInfoObj instanceof UserInfo){
        userInfo = userInfoObj;
        users.push(userInfoObj);
    }else {
        userInfo = new UserInfo(userInfoObj);
        users.push(userInfo);
    }
    saveUser(userInfo);
}
/**
 * 查看所有用户的信息
 */
function queryUserInfo(){
    console.log('所有用户数量', users.length);
    for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        console.log(obj);
    }
}
exports.isUserNameExist = isUserNameExist;
exports.isUserInfoCorrect = isUserInfoCorrect;
exports.addUser = addUser;
exports.queryUserInfo = queryUserInfo;









 var wukong = new UserInfo({
 userName : 'wukong',
 password : '123456',
 gender : 'male',
 email : 'wukong@atguigu.com'
 });
 var bajie = new UserInfo({
 userName : 'bajie',
 password : 'abcdef',
 gender : 'male',
 email : 'bajie@atguigu.com'
 });
 addUser(wukong);
 addUser(bajie);








