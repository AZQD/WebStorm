/**
 * Created by Administrator on 2016/8/1.
 */
window.onload = function(){
    var req = createRequest();
    //console.log('hel');
    req.onreadystatechange = function(){
        //console.log('hel');
        if(req.readyState===4 && req.status===200){
            var doc = req.responseXML;
            console.log(doc);
            var name = doc.getElementsByTagName('province')[1]
                .getElementsByTagName('city')[0]
                .firstChild.nodeValue;
            console.log(name);
        }
    };
    req.open('GET', '/ajax/test/xml');
    req.send();
    console.log('hel');

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
