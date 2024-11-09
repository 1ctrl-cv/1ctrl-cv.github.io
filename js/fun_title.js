// Copyright (c) B84F2246
// Author: B84F2246
// fun_title.js
/////////////////////////
var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    // $('[rel="icon"]').attr('href', "/img/trhx2.png");
    document.title = "你干嘛去";
    clearTimeout(titleTime);
  } else {
    // $('[rel="icon"]').attr('href', "/img/trhx2.png");
    document.title = "哟，回来了";
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
