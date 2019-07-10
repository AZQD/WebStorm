/**
 * Created by Administrator on 2016/8/1.
 */

/**
 * 因为不是没有设置跨域请求，所以：
 *http://localhost:63342/WebStorm/4.Ajax/8.1task/public/1.get/get.html
 * 改为：http://localhost:3000/1.get/get.html
 */


/*
 测试get类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 发请求
 */

document.getElementById('getBTN').onclick = function (){
    //1. 创建一个xmlhttpRequest对象
    var request = createRequest();
    //console.log(request);

    // 2. 设置回调监听
    //当readystate的值发生变化时调用
    request.onreadystatechange = function(){
        //请求相应完成时，且成功响应
        if(request.readyState === 4 && request.status ===200){
            //获取服务器返回的响应数据
            var result = request.responseText;
            alert(result);
            document.getElementById('result').innerHTML = result;
        }
    };
    // 3. 打开一个连接
    request.open('GET', '/ajax/test/get?superstar=jingtian');
    //4.发送请求
    //因为get请求，所以不需要指定请求体参数
    request.send();


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