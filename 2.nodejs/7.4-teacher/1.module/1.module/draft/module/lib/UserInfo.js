
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

exports.UserInfo = UserInfo;