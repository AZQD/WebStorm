//包装一层方便业务逻辑调用
var mongoose = require('mongoose');
var dburl = 'mongodb://127.0.0.1:27017/emp';//数据库地址

//建立数据库连接
function connect(){
    //连接
    mongoose.connect(dburl);
    //获取连接对象
    db = mongoose.connection;

    //注册事件回调
    db.on('open', function(err){
        if(err){
            throw err;
        }
        console.log('opened');
    });
    //注册时间回调
    db.on('error', function(err){
        if(err){
            throw err;
        }
    });
}
exports.connect = connect;
//connect();      //暂时先连接

//断开数据库连接
function disconnect(){
    //断开连接
    mongoose.disconnect();
    db = null;
}
exports.disconnect = disconnect;

//获得 Schema
var Schema = mongoose.Schema;


//定义user Schema
var userSchema = new Schema({
    userName:String,
    password:String,
    registerDate: {type:Date, default: Date.now()},
    gender:String,
    email:String
});
//编译model
var UserInfoModel = mongoose.model('user', userSchema);

//新建一个 user 到数据库中
function addAUser(userName, password, gender, email, cb){
    //1.new 一个实例(传入参数)
    //2.将这个实例save
    var userInfo = {
        userName: userName,
        password: password,
        gender: gender,
        email: email
    };
    var userTemp = new UserInfoModel(userInfo);
    userTemp.save(userTemp, function(err, result){
        if (err) {
            cb(err);
        }
        else{
            cb(null, null);
        }
    });
}
exports.addAUser = addAUser;
//addAUser('wukong', '123456', 'wukong@atguigu.com');

//新建一个 userInfo 到数据库中
function addAUserInfo(userInfo, cb){
    var userTemp = new UserInfoModel(userInfo); // 数据模型
    userTemp.save(userTemp, function(err, result){
        if (err) {
            cb(err);
        }
        else{
            cb(null, null);
        }
    });
}
exports.addAUserInfo = addAUserInfo;
//addAUser('wukong', '123456', 'wukong@atguigu.com');

//从数据库中找到一个 user
function findUserByName(userName, cb){
    UserInfoModel.find({userName: userName}, function(err, result){
        if (err) {
            cb(err);
        }
        else{
            //如果查到的用户的数量为 0 那就是没有找到用户
            //如果查到的用户数量为1， 那就是到了用户
            //如果查到的用户数量为其他， 按摩就是出错了，因为，每个用户名只能注册一次
            var user = null;
            switch (result.length){
                case 0:
                    user = null;
                    break;
                case 1:
                    user = result[0];
                    break;
                default:
                    user = result[0];
                    console.error('too many users were found');
            }
            cb(null, user);
        }
    });
}
exports.findUserByName = findUserByName;
//findUserByName('wukong');

var findUserById = function(id, cb){
    UserInfoModel.findOne({_id: id}, function(err, user){
        if (err) {
            cb(err);
        }
        else{
            cb(null, user);
        }
    });
};
