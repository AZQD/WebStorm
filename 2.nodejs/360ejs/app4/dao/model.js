var foreignObj = {
  first : {
      title: 'SHAONIANPerfect Logic',
      summary : 'All you want your website to do.',
      content : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt ',
      picSrc : 'img/content/contentA-01.jpg'
  }
};
var chinessObj = {
    first : {
        title: 'html',
        summary : 'HTML 是用来描述网页的一种语言',
        content : 'HTML 指的是超文本标记语言。HTML 不是一种编程语言，而是一种标记语言 (markup language)。标记语言是一套标记标签 (markup tag)。HTML 使用标记标签来描述网页HTML 文档描述网页HTML',
        picSrc : 'img/content/contentB-01.jpg'
    }
};


function getForeign(){
    return foreignObj;
}
exports.getForeign = getForeign;
function getChiness(){
    return chinessObj;
}
exports.getChiness = getChiness;