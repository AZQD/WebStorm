/**
 * Created by 许井龙 on 2016/7/19.
 */

var navNarrow;
var navWide;

initLayoutBox();
resetLayoutBoxHeight();

window.onresize = function(){
    resetLayoutBoxHeight()
}

function initLayoutBox(){
    navNarrow = document.querySelector(".nav-narrow");
    navWide = document.querySelector(".nav-wide");
}

function resetLayoutBoxHeight(){
    navNarrow.style.height = window.innerHeight + "px";
    navWide.style.height = window.innerHeight + "px";
}