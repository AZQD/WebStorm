var userInfo= require('./UserInfo.js');

var users = [];

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
exports.isUserNameExist = isUserNameExist;

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
exports.isUserInfoCorrect = isUserInfoCorrect;
/**
 * 添加用户
 * @param userInfoObj
 */
function addUser(userInfoObj){
    if(userInfoObj instanceof userInfo.UserInfo){
        users.push(userInfoObj);
    }else {
        var userInfoTemp = new userInfo.UserInfo(userInfoObj);
        users.push(userInfoTemp);
    }
}
exports.addUser = addUser;

/**
 * 查询所有数据
 */
function queryUserInfo(){
    console.log('所有用户数量', users.length);
    for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        console.log(obj);
    }
}
exports.queryUserInfo = queryUserInfo;

var wukong = new userInfo.UserInfo({
    userName : 'wukong',
    password : '123456',
    gender : 'male',
    email : 'wukong@atguigu.com'
});
var bajie = new userInfo.UserInfo({
    userName : 'bajie',
    password : 'abcdef',
    gender : 'male',
    email : 'bajie@atguigu.com'
});
addUser(wukong);
addUser(bajie);










