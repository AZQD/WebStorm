var express = require('express');
var router = express.Router();

console.log('路由');

router.use(initialShoppongCart);

router.get('/', function(req, res){
    console.log('第一个路由/');
    res.redirect('/shoppingCart.html');
});
router.get('/showshoppingcart', function(req, res){
    console.log('第二个路由/showshoppingcart');
    showShoppingCartInPage(req, res);
});

router.get('/shopping', function(req, res){
    var production = req.query.production;
    console.log(production);
    var shoppingCart = getShoppingCart(req, res);
    putIntoShoppingCart(production, shoppingCart);
    //res.end('/shopping');
    showShoppingCartInPage(req, res);
});


router.all('*', function(req, res, next){
    res.end('404 not found');
});

module.exports = router;

//这是一个中间件，符合三个参数，还有一个next
// 初始化购物车
function initialShoppongCart(req, res, next){
    if(!req.session.shoppingCart){
        req.session.shoppingCart = [];
    }
    next();
}

function getShoppingCart(req, res){
    return req.session.shoppingCart;
}

function showShoppingCartInPage(req, res){
    var content = '<h1>已经购买了：</h1>';
    var cart = getShoppingCart(req, res);
    var obj = null;
    for(var i = 0; i<cart.length; i++){
        obj = cart[i];
        content = content + ('<h4>' + obj + '</h4>');
    }
    var a = '<a href="/shoppingCart.html">继续购物</a>';
    content +=a;
    //writeHead 即时发送响应头
    res.writeHead(200, 'success', {
        'content-type' : 'text/html;charset=utf8'
    });
    res.end(content);
}

function putIntoShoppingCart(production, shoppingCart){
    shoppingCart.push(production);
}