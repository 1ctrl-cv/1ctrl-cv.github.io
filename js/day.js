// Copyright (c) B84F2246
// Author: B84F2246
// day.js
/////////////////////////
document.write([
    '<style type="text/css">',
    '  .htmlgray-filter {',
    '    filter: grayscale(100%);',
    '    -webkit-filter: grayscale(100%);',
    '    -moz-filter: grayscale(100%);',
    '    -ms-filter: grayscale(100%);',
    '    -o-filter: grayscale(100%);',
    '    filter: url("data:image/svg+xml;utf8,#grayscale");',
    '    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);',
    '    -webkit-filter: grayscale(1);',
    '  }',
    '</style>'].join('')
);


var date = new Date();
var nowMonth = date.getMonth() + 1;
var nowDay = date.getDate();
var nowDate = nowMonth + '-' + nowDay;

var nationalMemorialDayArray = [
    '12-13',
];

function hasHtmlGrayFilter() {
    const elements = document.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
        if  (elements[i].hasAttribute('htmlgray-filter')) {
            return false;
        }
    }
    return true;
}

if (nationalMemorialDayArray.includes(nowDate) && hasGrayFilter()) {
    var root = document.documentElement;
    root.className += ' htmlgray-filter';
    console.log("节日系统-扩展模块 > \n国行公祭，法立典章。铸兹宝鼎，祀我国殇。\n永矢弗谖，祈愿和平。中华圆梦，民族复兴。")
}
