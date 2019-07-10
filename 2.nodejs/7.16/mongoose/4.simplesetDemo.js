var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var MonsterSchema = mongoose.Schema({
    name: String,
    age: Number,
    friend: [String],
    gender: {type: String, default: 'male'}
});

var Cat = mongoose.model('animal', MonsterSchema);

var kitty = new Cat({
    name: 'kitty',
    friend: ['tom', 'jerry']
});
kitty.age = 3;

//kitty.save(function(err){
//    if(err){
//        console.error(err);
//    }else{
//        console.log('*******save********');
//        console.log('对一个实例对象调用 .save 方法后，mongoose 会去你的 mongodb 中的 test 数据库里，存入一条记录。');
//
//    }
//});

Cat.find({}, function(err, result){
    if(err){
        console.error(err);
    }else{
        console.log('********* find ***********');
        console.log(result.length);
        console.log(result);
    }
});