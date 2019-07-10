var fs = require('fs');
var pathModule = require('path');

var FILE_PATH = './a';
function rethrow() {
    return function(err) {
        if (err) {
            console.trace();
            throw err;
        }
    };
}
function maybeCallback(cb) {
    return typeof cb === 'function' ? cb : rethrow();
}

function mkdir(path, callback){
    var callback = maybeCallback(arguments[arguments.length - 1]);
    fs.access(path, fs.F_OK, function (err) {
        if(err){
            fs.mkdir(path, function(err){
                if(err){
                    callback(err);
                }
                else{
                    console.log('创建成功');
                    callback();
                }
            });
        }
        else {
            callback();
        }
    });
}

// 创建文件
function createFile(path, callback){
    var callback = maybeCallback(arguments[arguments.length - 1]);
    fs.open(path, 'w+', function(err, fd) {
        if (err) {
            callback(err);
        }
        var buf = new Buffer('你挑着担，我牵着马');
        fs.write(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
            if (err) {
                closeAndCallback(err, fd);
            }
            else{
                console.log('文件创建成功');
                closeAndCallback(null, fd);
            }
        })
    });
    function closeAndCallback(err, fd){
        fs.close(fd, function (err_close) {
            if(err_close){
                throw err_close;
            }
            callback(err);
        });
    }
}

function readDir(path, callback){
    var callback = maybeCallback(arguments[arguments.length - 1]);
    fs.access(path, fs.F_OK|fs.R_OK, function (err) {
        if(err){
            callback(err);
        }
        else{
            fs.readdir(path, function (err, files) {
                if(err){
                    callback(err);
                }
                // files 数组 []
                files.forEach(function (item) {
                    console.log(item);
                });
                callback();
            })
        }
    });
}


// 删除文件夹 改写为同步版本
function deleteDirSync(path){
    try {
        fs.accessSync(path, fs.F_OK);
        // 删除文件夹
        try {
            fs.rmdirSync(path);
        }catch (e){
            throw e;
        }
    } catch (e) {
        throw e;
    }
}

// 递归的删除文件夹 改写为同步版
function directoryForceSync(path){
    //得到所有 子文件
    var callback = maybeCallback(arguments[arguments.length - 1]);
    try {
        fs.accessSync(path, fs.F_OK | fs.R_OK);
        // 读取文件夹
        try {
            var files = fs.readdirSync(path);
            files.forEach(function (item) { // files 数组 []
                var tempPath = pathModule.join(path,item);
                var status = fs.statSync (tempPath);
                //如果是文件 则删除
                if (status.isFile () ){
                    fs.unlinkSync(tempPath);
                    console.log('成功删除文件', tempPath);
                }
                //如果是文件夹
                else if (status.isDirectory()){
                    directoryForceSync(tempPath, function (err) {
                        if(err){
                            callback(err);
                        }
                    });
                }
            });
            deleteDirSync(path);
        } catch (e) {
            throw e;
        }
    } catch (e) {
        throw e;
    }
}


function deleteDir(path, callback){
    var callback = maybeCallback(arguments[arguments.length - 1]);
    fs.access(path, fs.F_OK, function (err) {
        if(err){
            callback(err);
        }
        else{
            fs.rmdir(path, function (err) {
                if(err){
                    callback(err);
                }else {
                    console.log('成功删除文件夹: ', path);
                    callback();
                }
            })
        }
    });
}

// 递归的删除文件夹
function directoryForce(path, callback){
    //得到所有 子文件
    var callback = maybeCallback(arguments[arguments.length - 1]);
    fs.access(path, fs.F_OK|fs.R_OK, function (err) {
        if(err){
            callback(err);
        }
        else{
            // 读取文件夹
            fs.readdir(path, function (err, files) {
                if(err){
                    callback(err);
                }
                var counter = files.length;
                function tryToDeleteLocalDir(){
                    if (--counter <= 0){
                        deleteDir(path, function (err) {
                            if(err){
                                throw err;
                            }
                            callback();
                        });
                    }
                }
                if( counter == 0){
                    tryToDeleteLocalDir();
                }
                else{
                    files.forEach(function (item) { // files 数组 []
                        var tempPath = pathModule.join(path,item);
                        var status = fs.statSync (tempPath);
                        //如果是文件 则删除
                        if (status.isFile () ){
                            fs.unlink(tempPath, function (err) {
                                if(err){
                                    callback(err);
                                }
                                console.log('成功删除文件：', tempPath)
                                tryToDeleteLocalDir();
                            });
                        }
                        //如果是文件夹
                        else if (status.isDirectory()){
                            directoryForce(tempPath, function (err) {
                                if(err){
                                    callback(err);
                                }
                                tryToDeleteLocalDir();
                            });
                        }
                    });
                }
            });
        }
    });
}

mkdir(FILE_PATH, function (err) {
    if (err) {
        throw err;
    }
    else{
        //创建文件
        var tempPath = pathModule.join(FILE_PATH, 'a.txt');
        createFile(tempPath, function (err) {
            if (err) {
                throw err;
            }
            readDir(FILE_PATH, function (err) {
                if (err) {
                    throw err;
                }
                else {
                    // 如果文件夹下面有文件的话，删除会抛异常
                    //deleteDir(FILE_PATH, function (err) {
                    //    if (err) {
                    //        throw err;
                    //    }
                    //});

                     //递归删除 异步方法
                    //directoryForce(FILE_PATH, function (err) {
                    //    if (err) {
                    //        throw err;
                    //    }
                    //    console.log('全部删除');
                    //});

                    // 递归删除，同步的方法
                    //try {
                    //    directoryForceSync(FILE_PATH);
                    //} catch (e) {
                    //    throw e;
                    //}
                }
            });
        });
    }
});