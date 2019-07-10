/**
 * Created by Administrator on 2016/8/1.
 */

/*
 服务器返回的数据是json数据
 */

window.onload = function(){
        var req = createRequest();
        req.onreadystatechange = function(){
            if(req.readyState ===4 && req.status ===200 ){
                var json = req.responseText;
                var provinces = JSON.parse(json);
                console.log(provinces);
                console.log(provinces[1]);
                //输出吉林市
                console.log(provinces[1].citys[1]);
            }
        };
        req.open('GET', '/ajax/test/json');
        req.send();





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






};