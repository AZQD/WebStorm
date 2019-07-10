/**
 * Created by Administrator on 2016/7/25.
 */

$.extend({
    leftTrim:function(str){
        return str.replace(/^\s+/, '');
    },
    rightTrim: function(str){
        return str.replace(/\s+$/, '');
    }

});

$.fn.extend({
    checkAll : function(){
        this.prop('checked', true);
    }
});

$.fn.extend({
    //unCheckAll :
});