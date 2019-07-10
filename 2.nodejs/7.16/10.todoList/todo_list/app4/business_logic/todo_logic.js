
var dao = require('../dao/todo_dao');
var crypto = require('crypto');



//添加新的 item
var newItem = function(req, res, next){
    //res.end('helloworld');
    //1.向数据库写数据
    //2.列表需要更新

    //1.向数据库写入数据
    //。。。。。。
    //首先需要准备好数据库
    var title = req.body.title;
    if(!title){
        var error = new Error('title 不存在');
        next(error);
    }
    //加入 userID
    var userID = req.session.user._id;
    dao.add(title, userID, function(err){
        if(err){
            next(err);
        }
        else{
            res.redirect('/');
        }
    });
    //2.列表更新
    // 回到首页，首页更新列表就可以了
    // 缺少一个功能点，就是首页更新列表
    //res.redirect('/');

};
exports.new = newItem;

//修改完成状态
var finish = function(req, res, next){
    var id = req.params.id;
    var finish_state = req.query.state;
    if(!id || !finish_state){
        res.end('id or state empty');
    }
    finish_state = finish_state == 'yes' ? 2 : 1;
    dao.eitdFinish(id, finish_state, function(err){
        if(err){
            next(err);
        }
        else{
            console.log('eid');
            res.redirect('/');
        }
    });
};
exports.finish = finish;

//删除item
var deleteItem = function(req, res, next){
    var id = req.params.id;
    dao.delete(id, function(err){
        if(err){
            next(err);
        }
        else {
            res.redirect('/');
        }
    });
};
exports.deleteItem = deleteItem;


//修改title psot 方法
var changeTitlePost = function(req, res, next){
    ///*1.获取数据
    //2.获得对象
    //3.修改数据
    //4.返回效果*/

    //1.获取数据
    var id = req.params.id;
    var title = req.body.title;
    //2.更新title
    dao.updateTitle(id, title, function(err){
        if(err){
            console.error(err);
            next(err);
        }
        else {
            //3.返回效果
            res.redirect('/');
        }
    });
};
exports.changeTitlePost = changeTitlePost;

//修改 title get 方法
var changeTitleGet = function(req, res, next){
    var id = req.params.id;
    dao.findById(id, function(err, doc){
        if(err){
            next(err);
        }
        else {
            var userInfo = req.session.user;
            res.render('edit.ejs', {item: doc, loginState:'logined', userInfo: userInfo});
        }
    });
};
exports.changeTitleGet = changeTitleGet;

//显示主页
var indexPage = function(req, res){

    var loginState = req.session.user ? 'logined' : 'notLogined';
    var userInfo = req.session.user ? req.session.user : {};
    switch (loginState){
        case 'logined':
            dao.findAllBelongsUser(userInfo._id, function (err, items) {
                if (err) {
                    return next(err);
                }
                res.render('item_list.ejs', {items: items, loginState: loginState, userInfo: userInfo});
            });
            break;
        case 'notLogined':
            res.render('login.ejs', { loginState: loginState});
            break;
        default:
            console.error('someThing worng');
    }


    //dao.findAll(function(err, docs){
    //    //注入页面
    //    res.render('index.ejs', {items: docs});
    //
    //    /*//页面显示逻辑
    //     for(var i=0; i<docs.length; i++){
    //     var item = docs[i];
    //     if(item.finish_state == '1'){
    //     //显示未完成样式
    //
    //     }else if(item.finish_state == '2'){
    //     //显示完成样式
    //
    //     }else {
    //     //console.log('数据出错');
    //     }
    //     }*/
    //});
};
exports.indexPage = indexPage;

//注册页面
var registerGet =function(req, res, next){
    res.render('register.ejs', {loginState: 'notLogined'});
};
exports.registerGet = registerGet;

//处理注册表单
var registerPost =function(req, res, next){
    //1.获得提交信息
        //1.如果用户名为空 或者 密码为空 或者 密码确认为空
        //  那么就返回用户，“用户名，密码，密码确认，不能不为空”
    //2.处理用处提交的信息
        //1.检查用户是否存在
            //1.如果存在，那么就返回"用户名已经注册，请更换用户名重新注册”
            //2.如果用户不存在，那么就进行一下一步
        //2.用户提交的两次密码是否一致
            //1.如果不一直，返回“两次密码不一致，请重新注册"
            //2.如果一致，进行注册（写入数据库）
            //3.进行下一步
    //3.返回处理结果
        //1.设置当前用户的登录状态
        //2.跳转到首页

    //1.获得提交信息
    var userName = req.body.userName;
    var password = req.body.password;
    var passwordConfirm = req.body.passwordConfirm;
    var email = req.body.email;
    if(!userName || !password || !passwordConfirm){
        res.writeHeader(200, {'Content-type': 'text/html;charset=utf-8'});
        res.end('用户名，密码，密码确认，不能不为空');
        return;
    }
    //2.处理用处提交的信息
    //1.检查用户是否存在
    dao.findUserByName(userName, function(err, user){
        if(err){
            next(err);
        }else {
            console.log(user);
            //1.如果存在，那么就返回"用户名已经注册，请更换用户名重新注册”
            if(user){
                res.writeHeader(200, {'Content-type': 'text/html;charset=utf-8'});
                res.end('用户名已经注册，请更换用户名重新注册');
            }
            //2.如果用户不存在，那么就进行一下一步
            else {
                //2.用户提交的两次密码是否一致
                //1.如果不一直，返回“两次密码不一致，请重新注册"
                if(password != passwordConfirm){
                    res.writeHeader(200, {'Content-type': 'text/html;charset=utf-8'});
                    res.end('两次密码不一致，请重新注册');
                }else {
                    //2.如果一致，进行注册（写入数据库）

                    //md5散列
                    var md5 = crypto.createHash('md5');
                    md5.update(password);
                    var passwordMD5 = md5.digest('Hex');

                    dao.addAUser(userName, passwordMD5, email, function(err){
                        //3.进行下一步
                        //3.返回处理结果
                        //1.设置当前用户的登录状态
                        req.session.user = user; //数据库中的 user 的信息
                        //2.跳转到首页
                        res.redirect('/');
                    });
                }
            }
        }
    });
};
exports.registerPost = registerPost;

//用户登录页面
var loginGet = function(req, res, next) {
    res.render('login.ejs', {loginState: 'notLogined'});
};
exports.loginGet = loginGet;

//用户登录逻辑
var loginPost = function(req, res, next){
    //1.获得用户输入值
    //  1.验证用户输入值
    //  2.检测是否存在该用户名
    //      1.如果存在，验证密码是否匹配
    //          1.如果密码匹配，那么就跳转到 item_list 页面
    //          2.如果密码不匹配，那么就就提示 "输入正确的用户名和密码"
    //      2.如果不存在，那么就提示 "输入正确的用户名和密码"
    //3.返回用户结果
    var sentence = '请输入正确的用户名和密码';
    var userName = req.body.userName;
    var password = req.body.password;
    if(!userName || !password){
        res.writeHeader(200, {'Content-type':'text/html;charset=utf-8'});
        res.end(sentence);
        return ;
    }
    dao.findUserByName(userName,function(err, user){
        if(err){
            next(err);
        }else {
            //如果查询结果存在
            if(user){
                //console.log(user);
                //验证密码
                //如果验证正确， 跳转到首页

                //md5散列
                var md5 = crypto.createHash('md5');
                md5.update(password);
                var passwordMD5 = md5.digest('hex');

                if(user.password == passwordMD5){
                    req.session.user = user;
                    //res.redirect('/');
                    //找到对应的数据
                    dao.findAllBelongsUser(user._id, function(err, result){
                        if(err){
                            next(err);
                        }else {
                            var obj = {
                                loginState : 'logined',
                                userInfo : user,
                                items : result
                            };
                            res.render('item_list.ejs', obj);
                        }
                    });
                }
                //如果验证错误，那么就返回："输入正确的用户名和密码"
                else {
                    res.writeHeader(200, {'Content-type':'text/html;charset=utf-8'});
                    res.end(sentence);
                }
            }
            //如果查询结果不存在
            else {
                res.writeHeader(200, {'Content-type':'text/html;charset=utf-8'});
                res.end(sentence);
            }
        }
    });

};
exports.loginPost = loginPost;

//用户登出
var logout = function(req, res, next){
    req.session.user = null;
    res.redirect('/');
};
exports.logout = logout;

//上传头像页面
var uploadAvatarGet = function(req, res, next){
    var userInfo = req.session.user;
    res.render('upload_avatar.ejs', {loginState:'logined', userInfo: userInfo});
};
exports.uploadAvatarGet = uploadAvatarGet;

//上传头像 post
var uploadAvatarPost = function(req, res, next) {
    //修改数据库
    var _id = req.session.user._id;
    var avatarFileName = req.session.user.userName;
    dao.uploadAvatar(_id, avatarFileName, function(err, user){
        if(err){
            next(err);
        }
        else{
            req.session.user = user;
            res.redirect('/');
        }
    });
};
exports.uploadAvatarPost = uploadAvatarPost;











