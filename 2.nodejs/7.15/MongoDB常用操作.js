/*

mongo    //打开mongo
show dbs //查询所有数据库
use emp  // 切换数据库
show collections 得到当前db的所有集合

//创建数据
db.jobs.insert({job_id:'taobao', name:'马云', salary:666, birthday:1973})
db.jobs.insert({job_id:'baidu', name:'李彦宏', salary:888, birthday:1986})
db.jobs.insert({job_id:'qq', name:'马化腾', salary:999, birthday:1964})
db.jobs.insert({job_id:'fbb',name:'范冰冰', salary:123456, birthday:1980})

//添加手机号
db.jobs.update({job_id:'taobao'},{$set:{telephone:6666666666}})
db.jobs.update({job_id:'baidu'},{$set:{telephone:8888888888}})
db.jobs.update({job_id:'qq'},{$set:{telephone:9999999999}})

//添加部门
db.jobs.update({job_id:'taobao'},{$set:{department:'淘宝'}})
db.jobs.update({job_id:'baidu'},{$set:{department:'百度'}})
db.jobs.update({job_id:'qq'},{$set:{department:'腾讯'}})

//删除范冰冰的工资
db.jobs.update({job_id:'fbb'}, {$unset:{salary:123456}})

 //删除范冰冰
db.jobs.remove({job_id:'fbb'})
db.index_banners.remove({_id:'575f7085f8a14116283dab9c'})

//更改马云的工资和手机号
db.jobs.update({job_id:'taobao'}, {$set:{salary:1111, telephone:15936239468}})
db.index_banners.update({_id:'575f7085f8a14116283dab9c'}, {$set:{img_src:/assets/images/img/bar1.png}}

//查询所有用户信息
db.jobs.find({})    //每次只能打印出来20个人的信息，后面的需要输入it
it

//限制查询5行用户信息
db.jobs.find({}).limit(5)

 //创建三个淘宝员工
 db.jobs.insert({job_id:'taobao', name:'员工A', salary:300, birthday:1988})
 db.jobs.insert({job_id:'taobao', name:'员工B', salary:600, birthday:1989})
 db.jobs.insert({job_id:'taobao', name:'员工C', salary:800, birthday:1990})

//查询淘宝员工的信息
db.jobs.find({job_id:'taobao'})

//查询淘宝员工的生日和手机号
db.jobs.find({job_id:'taobao'}, {_id:0, name:1, birthday:1, telephone:1})



//$exists的值为true,选择存在该字段的文档；若值为false则选择不包含该字段的文档
 db.jobs.find({telephone:{$exists:true}})


 查询null  配合 $in 和 $exists 来查询 null
 准备数据:
db.jobs.update({$or:[{job_id:'ST_CLERK'}, {job_id:'ST_MAN'}]}, {$set:{job_desc:null}}, true, true)
 查询：
db.jobs.find({$and:[{job_desc:{$exists:true}}, {job_desc:{$in:[null]}}]})


数组
准备数据：$all
db.jobs.update({job_id:'ST_CLERK'}, {$set:{work_day:[1,2,3,5,6]}}, {multi:true})
db.jobs.update({job_id:'ST_MAN'}, {$set:{work_day:[1,2,4,5,6]}}, {multi:true})
查询包含[3,4]的
db.jobs.find({work_day:{$in:[3, 4]}})
查询索引为2，此时值为4的
db.jobs.find({"work_day.2":4})
查询所有包含[1,2,3]的
db.jobs.find({work_day:{$all:[1,2,3]}})

准备数据：$size
db.jobs.update({job_id:'ST_CLERK'}, {$set:{work_day:[1,2,3,5]}})
查询数组长度为4的
db.jobs.find({work_day:{$size:4}})
查询数组长度为5的
db.jobs.find({work_day:{$size:5}})

 //字符串   可以用 this 或者 obj 来指代当前文档对象
 db.jobs.find({$where:'this.job_id == "taobao"'})
 db.jobs.find({$where:'obj.job_id == "taobao"'})

 //函数    这里编程，如果返回值为 true，那么文档对象被加入结果集
 //字符串   可以用 this 或者 obj 来指代当前文档对象
 备注：结果集：从一个集合里查询的结果保存为一个集合
 不推荐使用 where 当数据量大的时候，where 的效能很低
 db.jobs.find({$where:function(){return true;}})
 db.jobs.find({$where:function(){return this.min_salary>10000;}})
 db.jobs.find({$where:function(){return obj.min_salary>10000;}})


 //查询name键值含有“cl”的文档
 db.jobs.find({job_id:/.cl./i})
db.jobs.find({job_id:{$regex: '.cl.', $options: 'i'}})




//添加用户信息  然后查询工资范围$gt，$lt

db.jobs.insert({job_id:'make',name:'abc', money:5000})
db.jobs.insert({job_id:'make',name:'def', money:8000})
db.jobs.insert({job_id:'make',name:'ghi', money:12000})
db.jobs.insert({job_id:'make',name:'jkl', money:15000})
 db.jobs.insert({job_id:'make',name:'mn', money:10000})

查询 9000< money <16000 的员工
db.jobs.find({job_id:'make',money:{$gt:9000, $lt:16000}})
工资收入按照由大到小排序：
db.jobs.find({job_id:'make',money:{$gt:9000, $lt:16000}}).sort({'money':1})
工资收入按照有小到大排序：
db.jobs.find({job_id:'make',money:{$gt:9000, $lt:16000}}).sort({'money':-1})
工资收入分页查找： 相当于mysql里的limit(1,2)，即跳过第0条，从第1条开始返回，返回2条
db.jobs.find({job_id:'make',money:{$gt:9000, $lt:16000}}).skip(1).limit(2)

 查询 12000<= money <=16000 的员工
db.jobs.find({job_id:'make',money:{$gte:12000, $lte:16000}})

查询 money=12000 和 money=15000 的员工
db.jobs.find({$or:[{money:12000},{money:15000}]})

查询job_id为make的数量
db.jobs.count({job_id:'make'})
*/