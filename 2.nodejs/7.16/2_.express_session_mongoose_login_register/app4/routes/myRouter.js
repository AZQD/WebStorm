var router = require('express').Router();   //mini - app
var business_logic = require('../module/business_logic.js');

//router.use();//加载中间件

//登录    刷出页面
//检查是否已经登录，如果已经登录，跳到个人首页，没有登录过呢
router.get('/login', checkIsLogined);
router.get('/login', function(req, res, next){
    business_logic.login_get(req, res);
});

//登录    上传数据    form post   请求体 查询字符串
router.post('/login', function(req, res, next){
    business_logic.login_post(req, res);
});

//注册    刷出页面
//检查是否已经注册，如果已经登录，跳到个人首页，没有登录过呢
router.get('/register', checkIsLogined);
router.get('/register', function(req, res, next){
    business_logic.register_get(req, res);
});
//登录    上传数据
router.post('/register', function(req, res, next){
    business_logic.register_post(req, res);
});

router.get('/user_index',checkIsNotLogined);
router.get('/user_index',function(req, res, next){
    res.redirect('/user_index.html');
});

//登出
router.get('/logout', function(req, res, next){
    business_logic.logout(req, res);
});

//404
router.all('*', function(req, res, next){
    res.redirect('/404.html');
});


module.exports = router;


function checkIsLogined(req, res, next){
    if(req.session.userInfo){
        //如果 req.session.userInfo 存在，说明用户已经登录过了
        //跳转到用户自己的首页
        res.redirect('/user_index.html');               //******** 所有的个人首页应该统一处理
    }else {
        next();
    }
}

function checkIsNotLogined(req, res, next){
    if(!req.session.userInfo){
        //如果 req.session.userInfo 存在，说明用户已经登录过了
        //跳转到用户自己的首页
        res.redirect('/login.html');
    }else {
        next();
    }
}

