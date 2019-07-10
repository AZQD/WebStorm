var mongodb = require('mongodb');
var util = require('util');
//console.log(util);
//console.log(mongodb);
var MongoClient = mongodb.MongoClient;
//console.log(MongoClient);
var url = 'mongodb://localhost:27017/emp';
MongoClient.connect(url, function(err, db){
    if(err){
        console.error(err);
    }
    console.log('Connected correctly to server.');
    console.log(util.inspect(db, false, 1, true));
    for(var i in db){
        if(typeof db[i] === 'function'){
            console.log(i);
        }
    }
    db.close();
});
