
$.extend({
    stringifyArray : function(array){
        return JSON.stringify(array);
    }
});

$.extend({
    parseArray : function(arrayJson){
     return JSON.parse(arrayJson);
    }
});
