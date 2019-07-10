var router = require('express').Router();
var business_logic = require('../module/business_logic.js');

router.get('/login', checkIsLogined);

router.get('/login', function(req, res, next){
    console.log('*******login_get********');
    business_logic.login_get(req, res);
});

router.post('/login', function(req, res, next){
    console.log('******login_post********');
    business_logic.login_post(req, res);
});

router.get('/register', checkIsLogined);
router.get('/register', function(req, res, next){
    console.log('******register_get********');
    business_logic.register_get(req, res);
});
router.post('/register', function(req, res, next){
    console.log('******register_post********');
    business_logic.register_post(req, res);
});

router.get('user_index', checkIsNoLogined);
router.get('user_index', function(req, res, next){
    res.redirect('/user_index.html');
});

router.get('/logout', function(req, res, next){
    console.log('*******logout************');
    business_logic.logout(req, res);
});

router.all('*', function(req, res, next){
    res.redirect('/404.html');
});


module.exports = router;


function checkIsLogined(req, res, next){
    console.log('第一个检测');
    console.log(req.session.userInfo);
    //打印 出来的结果如下；
    //{ userName: 'wukong',
    //    password: '123456',
    //    gender: 'male',
    //    email: 'wukong@atguigu.com' }
    if(req.session.userInfo){
        console.log('aaaaaaa');
        res.redirect('/user_index.html');

    }else {
        console.log('bbbbbbb');
        next();
    }

}

function checkIsNoLogined(req, res, next){
    console.log('第一个检测');
    if(!req.session.userInfo){
        res.redirect('/login.html');
    }else{
        next();
    }
}