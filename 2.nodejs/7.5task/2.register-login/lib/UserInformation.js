/**
 * Created by Administrator on 2016/7/2.
 */
//注意：参数userInfoObj是一个对象！
function UserInfo(userInfoObj){
    this.userName=userInfoObj.userName;
    this.password=userInfoObj.password;
    this.gender=userInfoObj.gender;
    this.email=userInfoObj.email;
}
exports.UserInfo=UserInfo;

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