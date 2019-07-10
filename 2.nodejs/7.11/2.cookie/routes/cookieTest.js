var express = require('express');
var router = express.Router();
var util = require('util');
console.log(util);
//检查对象是否为空
function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}

// 操作 cookie
router.get('/', function(req, res, next) {
    //观察对象  变色
    console.log(util.inspect(req.cookies, false, 1, true));
    //如果 cookie 为空，那么就写 cookie
    if(isEmptyObject(req.cookies) ){
        //res.writeHead({'set-cookie':['=;httpOnly=true']})
        res.cookie('name', 'wukong');   //语法简单直接
        res.cookie('hobby', 'fight', {signed: true});   //加入了 签名
        res.cookie('gender', 'male', {secure: true});   //只有 https 可以用
        res.cookie('home address', 'huaGuoShan');   //第二次访问的时候加密
        res.cookie('parents', 'none');  //观察被删除

    }
    else{
        //如果 cookie 不空，那么就先读出 cookie，然后，在写 cookie
        var obj = {};
        //被签过名的 放到了 req.cookies 中
        obj.name = req.cookies.name;
        obj.hobby = req.cookies.hobby;
        //obj.homeAddress = req.cookies.home address; // 不符合js语法
        obj.homeAddress = req.cookies['home address'];
        //被签过名的 放到了 req.signedCookies 中
        obj.signedName = req.signedCookies.name;
        obj.signedHobby = req.signedCookies.hobby;
        obj.signedHomeAddress = req.signedCookies['home address'];
        console.log(obj);

        //设置 cookie
        res.cookie('hobby', 'reading');
        res.cookie('hobby', 'eating');
        res.cookie('name', 'bajie');
        res.cookie('home address', 'gaoLaoZhuang', {signed: true});
        res.clearCookie('parents');  //观察被删除
    }
    res.end('cookie test');
});

module.exports = router;
