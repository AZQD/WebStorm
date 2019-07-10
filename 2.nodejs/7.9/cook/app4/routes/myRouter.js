var router = require('express').Router();

router.use( function(req, res, next){
    console.log('all request');
    //res.end(req.url);
    req.cook = 'start\n';
    //console.log('开始');
    next();
});

//此时为post,不执行
router.post('/cook', function(req, res, next){
    console.log('post cook');
    res.write('post cook\n');
    res.end('req.url: ' + req.url);
});

router.get('/cook', function(req, res, next){
    console.log('get cook');
    //为什么要写cook
    req.cook += 'buying\n';
    next();
}, function(req, res, next){
    req.cook += "washing\n";
    next();
}, function(req, res, next){
    req.cook += "cutting\n";
    console.log('aaaaaaaaaaaaaa');
    next();
    console.log('bbbbbbbbbbbbbbbb');
});
router.get('/cook', function(req, res, next){
    req.cook += "cooking\n";
    next();
}, function(req, res, next){
    req.cook += 'eating\n';

    res.end(req.cook);
});

router.all('*', function(req, res, next){
    res.end('404, not found');
});

console.log('*************');



module.exports = router;