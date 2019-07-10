/**
 * Created by Administrator on 2016/8/1.
 */



/*
 测试post类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 设置请求头
 5. 发请求
 */

document.getElementById('postBTN').onclick = function (){
    //1. 创建一个xmlhttpRequest对象
    var req = createRequest();
    //2. 设置回调监听
    req.onreadystatechange = function(){
        var result = req.responseText;
        alert(result);
        document.getElementById('result').innerHTML = result;
        console.log(result);
    };
    //3. 打开一个连接
    req.open('POST', '/ajax/test/post');
    //4.设置响应头
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //5.发送请求
    req.send('goddess=yihuan&type=beautiful');

};




/**
 * 创建一个XmlhttpRequest对象
 * @returns {*}
 */

function createRequest (){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlhttp;
}