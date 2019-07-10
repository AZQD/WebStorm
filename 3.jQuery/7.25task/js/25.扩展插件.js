/**
 * Created by Administrator on 2016/7/25.
 */

//给$添加
//去除字符串左侧空格
$.extend({
    leftTrim : function(str){
        return str.replace(/^\s+/, '');
    }
});
//去除字符串右侧空格
$.extend({
    rightTrim : function(str){
        return str.replace(/\s+$/, '');
    }
});

//给$对象添加
// 全选
$.fn.extend({
    checkAll : function(){
        this.prop('checked', true);
    }
});
//全不选
$.fn.extend({
    unCheckAll : function(){
        this.prop('checked', false);
    }
});
//反选
$.fn.extend({
    reverseCheck : function(){
        this.each(function(){
            this.checked = !this.checked;
        });
    }
});
