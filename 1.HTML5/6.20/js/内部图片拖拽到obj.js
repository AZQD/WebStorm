/**
 * Created by Administrator on 2016/6/20.
 */

function innerDrag(obj1,obj2 ){
    //支持单张和多张图片拖拽,图片必须是数组形式，
    // 如果是一张图片，也要写一个数组
    //比如：var imgs=document.querySelectorAll(".items img");

    var selectedItem;
    var len = obj2.length;
    for(var i=0; i<len; i++){
        obj2[i].addEventListener("dragstart", function(event){
            selectedItem = this;
            console.log(selectedItem);
        },false);
    }

    obj1.addEventListener("dragover", function(event){
//        一定要在dragover中阻止默认行为。
        event.preventDefault();
    }, false);

    obj1.addEventListener("drop", function(event){
        event.preventDefault();
        obj1.appendChild(selectedItem);

    }, false);

}