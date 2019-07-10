/**
 * Created by Administrator on 2016/6/20.
 */

/*浏览器外部的图片拖拽到obj这个对象当中：*/
function drap(obj){

    obj.addEventListener("dragover",function(event){
        event.preventDefault();
    },false);

    obj.addEventListener("drop",function(event){
//        drop:阻止默认行为
        event.preventDefault();
//        被拖拽的所有文件列表
        var files = event.dataTransfer.files;
//        文件个数
        var len = files.length;
        for(var i=0; i<len; i++){
            //            读取被拖拽文件:只处理图片文件
            if(files[i].type.indexOf("image") != -1){
                var fileReader = new FileReader();
                fileReader.readAsDataURL(files[i]);
                fileReader.onload = function(){
                    var img = document.createElement("img");
                    // 文件流对象
                    img.src = this.resultsd;
                    obj.appendChild(img);
                }
            }
        }

    },false);

}