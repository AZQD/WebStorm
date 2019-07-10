var express = require('express');
var router = express.Router();
var dao = require('../dao/model.js');


router.get('/', function(req, res, next){
    var time = Date.now() % 2;
    console.log(time);
    var isChiness = (time === 0);
    var obj = '';
    console.log('11111111111111111111111111');
    if(isChiness){
        obj = dao.getChiness();
        console.log('****************************');
    }
    else{
        obj = dao.getForeign();
        console.log('&&&&&&&&&&&&&&&&&&&&&&&*');
    }
    //obj.title = 'Express';
    res.render('index', obj);
});

module.exports = router;