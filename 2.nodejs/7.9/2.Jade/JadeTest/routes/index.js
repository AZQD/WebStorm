var express = require('express');
var router = express.Router();
var jade = require('jade');

// Compile a function
var fn = jade.compile('hello world #{name}', {});

// Render the function
var html1 = fn({name:'guiGu'});
console.log(html1);

var html2 = jade.render('.csser.com hello,#{name}', { name: 'atGuiGu' });
console.log(html2);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/simple1', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html1);
});

var CITY_NAME = [
    'LA',
    'SAN JOSE',
    'MIAMI',
    'NEW YORK'
];

var CITY_SCORE = [
    '60',
    '62',
    '80',
    '70'
];
router.get('/simple2', function (req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html2);
});

router.get('/simple3', function (req, res, next) {
    var param = {
        citys: CITY_NAME,
        cscores: CITY_SCORE,
        name:'Wu Kong',
        greeting:'what\'s up'
    };
    res.render('jadeDemo.jade', param);
});
module.exports = router;
