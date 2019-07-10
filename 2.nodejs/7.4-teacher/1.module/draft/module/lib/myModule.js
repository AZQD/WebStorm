console.log('myModule.js');

var users = [];

function UserInfo( userInfoObj ){
    this.userName = userInfoObj.userName;
    this.password = userInfoObj.password;
    this.gender= userInfoObj.gender;
    this.email = userInfoObj.email;
}

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

/**
 * 添加用户
 * @param userInfoObj
 */
function addUser(userInfoObj){
    if(userInfoObj instanceof UserInfo){
        users.push(userInfoObj);
    }else {
        var userInfo = new UserInfo(userInfoObj);
        users.push(userInfo);
    }
}

addUser(wukong);
addUser(bajie);

//暴露一个属性 给别人调用
exports.showUsers = function(){
    console.log(users);
};





