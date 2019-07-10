/**
 * Created by Administrator on 2016/8/1.
 */

//可以用Ajax检测用户名是否符合要求
window.onload = function(){

    document.getElementById('name').onblur = function (){
        var req = createRequest();
        req.onreadystatechange = function(){
            if(req.readyState===4 && req.status===200){
                var result = req.responseText;
                document.getElementById('result').innerHTML = result;
            }
        };
        //得到输入的用户名
        var username = this.value;
        req.open('GET', '/ajax/test/checkName?username='+username);
        req.send();
    };

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