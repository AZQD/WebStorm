//声明一个 router 相当于一个 mini app
var router = require('express').Router();
//处理商业逻辑
var todoLogic = require('../business_logic/todo_logic.js');
//引入上传文件中间件
var multer = require('multer');

//添加一个待办事宜
router.post('/new', todoLogic.new);

// 修改状态
router.get('/finish/:id/', todoLogic.finish);

// 删除 item
router.get('/delete/:id',todoLogic.deleteItem);

//修改 title 上传数据
router.post('/edit/:id', todoLogic.changeTitlePost);

//修改 titel  刷出页面
router.get('/edit/:id', todoLogic.changeTitleGet);

//跳转到用户注册页  刷出页面
router.get('/register', todoLogic.registerGet);

//提交用户注册信息  上传数据
router.post('/register', todoLogic.registerPost);

//用户登录页面    刷出页面
router.get('/login', todoLogic.loginGet);

//处理用户登录逻辑  上传数据
router.post('/login', todoLogic.loginPost);

//用户登出  处理登出，并跳转页面
router.get('/logout', todoLogic.logout);

//上传头像 get  上传数据，并跳转页面
router.get('/upload_avatar', todoLogic.uploadAvatarGet);



//上传头像 post
//构造 storage 修改文件名：文件为 userName
var AVATAR_PATH = '../public/avatars';
var storage = multer.diskStorage({
    destination: AVATAR_PATH,
    filename: function (req, file, cb) {
        var fileName = req.session.user.userName;
        cb(null, fileName)
    }
});

//实例化 upload对象
var uploadObj = multer({ storage: storage });
router.post('/upload_avatar',
    uploadObj.single('avatar'),
    todoLogic.uploadAvatarPost
);






//显示主页
router.get('/', todoLogic.indexPage);




module.exports = router;