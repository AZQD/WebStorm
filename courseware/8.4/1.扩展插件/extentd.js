/**
 * Created by Administrator on 2016/8/4.
 */

$.extend({
    trimLeft : function(str){
        return str.replace(/^\s+/, '');
    }
});

$.extend({
    trimRight : function(str){
        return str.replace(/\s+$/, '');
    }
});

$.extend({
    Trim : function(str){
        return str.replace(/\s/g, '');
    }
});

$.fn.extend({
    checkAll : function(){
        this.prop('checked', true);
    }
});

$.fn.extend({
    uncheckAll : function(){
        this.prop('checked', false);
    }
});

$.fn.extend({
    reverseCheck : function(){
        this.each(function () {
            this.checked = !this.checked;
        });
    }
});


//jquery 中如何将数组转化为json字符串，然后再转化回来？

$.extend({
    arrToJson : function(arr){
        return JSON.stringify(arr);
    }
});

$.extend({
    jsonToArr : function(arrJson){
        return JSON.parse(arrJson);
    }
});