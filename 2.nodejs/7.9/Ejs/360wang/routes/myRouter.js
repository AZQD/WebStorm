var express = require('express');
var router = express.Router();
var model = require('../dao/model');

/* GET home page. */
router.get('/', function(req, res, next) {
    var obj = null;
    var timer = Date.now();
    timer = timer%2;
    //偶数-----For the Horde!!!!!!!!!
    if(timer === 0) {
        obj = model.horde();
    }
    //奇数-----For the Alliance!!!!!!!!!!
    else {
        obj = model.Alliance();
    }

    res.render('index', obj);
});

module.exports = router;
