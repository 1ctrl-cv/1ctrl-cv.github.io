!function(){"use strict";var a=location,e=document,t=function(t,o,n,r){(void 0===o&&(o=1),void 0===n&&(n=.1),void 0===r&&(r="baxia-fast"),0>=n||Math.random()<n)&&function(a,e){var t=[];for(var o in a)t.push(o+"="+encodeURIComponent(a[o]));(new Image).src=e+t.join("&")}({code:o,msg:t+"",pid:r,page:a.href.split(/[#?]/)[0],query:a.search.substr(1),hash:a.hash,referrer:e.referrer,title:e.title,ua:navigator.userAgent},"//gm.mmstat.com/fsp.1.1?")};var o=["alires","pha_pageheader","pha_header","/punish","fourier.taobao.com/assist","fourier.alibaba.com/assist","market.m.taobao.com/app/tbhome/common/index.html",".sm.cn",".sm-tc.cn",".alipay.com",".aliyun.com","error.taobao.com","sialiagames","vntth","qookkagames","mobijoygames"];var n=document,r=1,i=function(a,e,o){if(!a)return e();var c=n.getElementsByTagName("script")[0],s=n.createElement("script");if(s.async=!0,s.src=a,(a.indexOf("alicdn")>-1||a.indexOf("lazcdn")>-1||a.indexOf("lzd-g.slatic.net")>-1)&&(s.crossOrigin=!0),s.onerror=function(n){5>r?(r++,i(a,e,o)):(s.onerror=null,t("function:loadJS. msg:"+a+"load error。props："+JSON.stringify(o)))},e){var l=!1;s.onload=s.onreadystatechange=function(){l||s.readyState&&!/loaded|complete/.test(s.readyState)||(s.onload=s.onreadystatechange=null,l=!0,e())}}c.parentNode.insertBefore(s,c)},c=function(a,e){return!!a&&a.indexOf(e)>-1},s=function(){if(document.currentScript)return document.currentScript;var a=null,e=document.getElementsByTagName("script"),t=null;try{throw Error()}catch(r){var o,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(o in e)if((t=e[o]).src==n||"interactive"==t.readyState)return a=e[o],e[o]}return a};var l,d,m,u,f=location.href||"",h=location.host||"";try{var p=!1;if(!window.AWSC&&(l=s(),d=l&&l.src?l.src.match(/https\:\/\/([^&]+).alicdn/):[,"g"],u="",-1===["laz-g-cdn","aeis","assets"].indexOf(m=d&&d[1])&&(m="g"),u="https://"+m+".alicdn.com/","assets"===m&&(u+="g/"),i(u+"AWSC/AWSC/awsc.js",function(){t("funcion:load AWSC success. msg: "+u+"AWSC/AWSC/awsc.js","load_awsc",.01)},null)),f.indexOf("loadbaxiajs")>-1||document.cookie.indexOf("loadbaxiajs")>-1){var g=null;if(f.indexOf("_set_bx_v_")>-1){var v=f.match(/_set_bx_v_=([^&]+)/);g=encodeURIComponent(v&&v[1])}j(1,g),p=!0}var x=[];x.push("crm.simba.taobao.com"),x.push("7.alibaba-inc.com"),x.push("chaoshi.service.xixikf.cn"),x.push("taobao.service.xixikf.cn"),x.push("tongyi.aliyun.com/chat");for(var b=0;x.length>b;b++)c(f,x[b])&&(p=!0);if(!self.baxiaCommon&&!p){t("init","aplus_js_load",.01);var _=[];_.push({path:".",ratio:1,jsv:"2.5.11"});for(b=0;_.length>b;b++)c(f,_[b].path)&&j(_[b].ratio,_[b].jsv)}!function(){var a,e,n,r=(Math.random()+"").replace("0.","");try{var i=document.cookie.match(/cna=([^;]+)/),c=location.href||"",s="https://fourier.taobao.com/rp?ext=51&data=jm_"+(i&&i[1])+"&random="+r+"&href="+encodeURIComponent(c)+"&protocol="+location.protocol+"&callback=jsonpCallback";(function(){for(var a=location.href||"",e=0;o.length>e;e++)if(a.indexOf(o[e])>-1)return!0;return!1})()||document.cookie.indexOf("xlly")>-1||(a=s,e=document.createElement("script"),n=document.getElementsByTagName("head")[0],e.type="text/javascript",e.charset="UTF-8",e.src=a,n.appendChild(e))}catch(l){t(l.message+"random="+r,12,1,"spl")}}()}catch(C){t("err"+C.message,"aplus_js_baxia_err",1)}var y=!1;function j(a,e){if(void 0===e&&(e="2.5.11"),a>=Math.random()&&!y){y=!0,t("baxiajs","aplus_js_load",.01);var o="//g.alicdn.com",n=self.goldlog;if(n&&n.getCdnPath&&(o=n.getCdnPath()),h&&h.indexOf("www.miravia.")>-1&&(o="//g.mdvcdn.com"),f.indexOf("_set_bx_v_")>-1){var r=f.match(/_set_bx_v_=([^&]+)/);e=encodeURIComponent(r&&r[1])}t("/sd/baxia/"+e+"/baxiaCommon.js",13,.01),o=o+"/sd/baxia/"+e+"/baxiaCommon.js",f.indexOf("_set_bx_v_=debug")>-1&&(o="http://localhost:8064/build/baxiaCommon.js"),i(o,null,null)}}}();
