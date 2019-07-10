
function UserInfo( userInfoObj ){
    this.userName = userInfoObj.userName;
    this.password = userInfoObj.password;
    this.gender= userInfoObj.gender;
    this.email = userInfoObj.email;
}
//修改
UserInfo.prototype.modify = function(userInfoObj){
    if(userInfoObj.userName){
        this.userName = userInfoObj.userName;
    }
    if(userInfoObj.password){
        this.password = userInfoObj.password;
    }
    if(userInfoObj.gender){
        this.gender = userInfoObj.gender;
    }
    if(userInfoObj.email){
        this.email = userInfoObj.email;
    }
};
//覆盖 toString() 方法
UserInfo.prototype.toString = function(){
    var separator = '$$';
    var str = '';
    str += this.userName + separator;
    str += this.password + separator;
    str += this.gender + separator;
    str += this.email + '\n';
    console.log(str);
    return str;
};

module.exports = UserInfo;