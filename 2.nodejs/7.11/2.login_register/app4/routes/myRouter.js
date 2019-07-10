var router = require('express').Router();
var business_logic = require('../module/business_logic');

router.get('/login', function(req, res, next){
    console.log('*******login_get********');
    business_logic.login_get(req, res);
});

router.post('/login', function(req, res, next){
    console.log('******login_post********');
    business_logic.login_post(req, res);
});
router.get('/register', function(req, res, next){
    console.log('******register_get********');
    business_logic.register_get(req, res);
});
router.post('/register', function(req, res, next){
    console.log('******register_post********');
    business_logic.register_post(req, res);
});

module.exports = router;