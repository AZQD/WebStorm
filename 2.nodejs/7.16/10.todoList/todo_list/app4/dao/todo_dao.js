var mongoose = require('mongoose');
var dburl = 'mongodb://127.0.0.1:27017/todo_new';//数据库地址
var db = null;


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

//断开数据库连接
function disconnect(){
    //断开连接
    mongoose.disconnect();
    db = null;
}
exports.disconnect = disconnect;


var Schema = mongoose.Schema;
var itemSchema = new Schema({
    userID: String,
    title: String,
    post_date: {type: Date, default: Date.now},
    finish_state: {type: Number, default: 1} //1.未完成  2.已经完成
});

//返回值: document 的模板     第一个参数：数据库中的collection的名字    第二参数：Schema 的实例
var ItemDoc = mongoose.model('item', itemSchema);

/*
//做实验
var one = new ItemDoc({title:'吃饭', finish_state:1 });
one.save(function(err, result){
    if(err){
        throw err;
    }
    console.log(result);
});
*/

//向数据库插入一条数据
exports.add = function(title, userID, cb){
    var item = new ItemDoc({title: title, userID: userID});
    item.save(function(err){
        if(err){
            return cb(err);
        }
        else{
            return cb(null);
        }
    });
};

//修改状态
exports.eitdFinish = function(id, finish_state, cb){
    findById(id, function(err, doc){
        if(err){
            cb(err);
        }else {
            doc.finish_state = finish_state;
            doc.post_date = new Date();
            doc.save(function(err){
                if(err){
                    cb(err);
                }else {
                    cb(null);
                }
            });
        }
    });
};

//删除 item
exports.delete = function(id, cb){
    findById(id, function(err, doc){
        if(err){
            cb(err);
        }else {
            doc.remove(function(err){
                if(err){
                    cb(err);
                }else {
                    cb(null);
                }
            });
        }
    });
};

//根据id寻找 document
var findById = function(id, cb){
    ItemDoc.findOne({_id:id}, function(err, doc){
        if(err){
            cb(err);
        }
        else {
            cb(null, doc);
        }
    })
};
exports.findById = findById;

//搜索出所有数据
exports.findAll = function(cb){
    ItemDoc.find({}, function(err, result){
        if(err){
            cb(err);
        }
        else{
            cb(null, result);
        }
    });
};


//搜索出所有数据
exports.findAllBelongsUser = function(userID, cb){
    ItemDoc.find({userID: userID}, function(err, result){
        if(err){
            cb(err);
        }
        else{
            cb(null, result);
        }
    });
};

//修改 item 的 title
function updateTitle(id, title, cb){
    //1.获得对象
    findById(id, function(err, result){
        if(err){
            cb(err);
        }
        else {
            console.log(result);
            result.title = title;
            result.post_date = Date.now();

            //2.修改对象 save
            result.save(function(err){
                if(err){
                    cb(err);
                }
                else{
                    console.log('saved');
                    cb(null, null);
                }
            });
        }
    });
}
exports.updateTitle = updateTitle;


//--------------------------------------------- UserInfo  -----------------------------------------
//定义user Schema
var userSchema = new Schema({
    userName:String,
    password:String,
    registerDate: {type:Date, default: Date.now()},
    email:String,
    avatar: String,
    avatarFileName : String
});
//编译model
var userModel = mongoose.model('user', userSchema);
//新建一个 user 到数据库中
function addAUser(userName, password, email, cb){
    //1.new 一个实例(传入参数)
    //2.将这个实例save
    var userInfo = {
        userName: userName,
        password: password,
        email: email
    };
    var userTemp = new userModel(userInfo);
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

//从数据库中找到一个 user
function findUserByName(userName, cb){
    userModel.find({userName: userName}, function(err, result){
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
    userModel.findOne({_id: id}, function(err, user){
        if (err) {
            cb(err);
        }
        else{
            cb(null, user);
        }
    });
};

//上传头像信息
var uploadAvatar = function (_id, avatarFileName, cb){
    findUserById(_id, function(err, user){
        if(err){
            return cb(err);
        }else {
            user.avatar = 'uploaded';
            user.avatarFileName = user.userName;
            user.save(function(err, userNew){
                if(err){
                    return cb(err);
                }else {
                    console.warn('avatar saved');
                    console.warn(userNew);
                    return cb(null, userNew);
                }
            });
        }
    });
};
exports.uploadAvatar = uploadAvatar;
























