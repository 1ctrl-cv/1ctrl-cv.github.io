// Generated by CoffeeScript 1.6.2
(function () {
  log = function (msg, config) {
    var el, tagname, wrapperEl;

    msg = msg.split("：");
    msg =
      '<div style="">\n  <span style="color:#666;">' +
      msg[0] +
      "：</span>\n  <span>" +
      (msg.slice(1).join("：") || "") +
      "</span>\n</div>";
    tagname = (config && config.tagname) || "div";
    el = jQuery("<" + tagname + ">" + msg + "</" + tagname + ">");
    if (typeof config === "string") {
      config = {
        id: config,
      };
    }
    if (!config || !config.id) {
      return el.appendTo("#log");
    }
    wrapperEl = jQuery("#" + config.id);
    if (wrapperEl.length) {
      if (config.type === "clear") {
        wrapperEl.html("");
      }
      return el.appendTo(wrapperEl);
    } else {
      el.attr("id", config.id);
      return el.appendTo("#log");
    }
  };

  getIp = function (cb) {
    var URL;

    URL = "http://110.75.20.230/yunqian/troubleshooter/ip_proxy.php?callback=?";
    return jQuery.getJSON(URL, cb);
  };

  getCookieEnable = function () {
    return document.cookie || navigator.cookieEnabled;
  };

  getFlashVersion = function () {
    var axo, e;

    try {
      try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        try {
          axo.AllowScriptAccess = "always";
        } catch (_error) {
          e = _error;
          return "6,0,0";
        }
      } catch (_error) {
        e = _error;
      }
      return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        .GetVariable("$version")
        .replace(/\D+/g, ",")
        .match(/^,?(.+),?$/)[1];
    } catch (_error) {
      e = _error;
      try {
        if (
          navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin
        ) {
          return (
            navigator.plugins["Shockwave Flash 2.0"] ||
            navigator.plugins["Shockwave Flash"]
          ).description
            .replace(/\D+/g, ",")
            .match(/^,?(.+),?$/)[1];
        }
      } catch (_error) {
        e = _error;
      }
    }
    return "0,0,0";
  };

  getOS = function () {
    var item, token, ua, _i, _len;

    ua = navigator.userAgent;
    token = [
      ["Windows NT 3.1", "Windows NT 3.1"],
      ["Windows NT 3.5", "Windows NT 3.5"],
      ["Windows NT 3.51", "Windows NT 3.51"],
      ["Windows NT 4.0", "Windows NT 4.0"],
      ["Windows NT 5.0", "Windows 2000"],
      ["Windows NT 5.1", "Windows XP"],
      ["Windows NT 5.2", "Windows XP/Server 2003"],
      ["Windows NT 6.0", "Windows Vista"],
      ["Windows NT 6.1", "Windows 7"],
      ["Windows NT 6.2", "Windows 8"],
      ["Windows NT 6.3", "Windows 8.1"],
      ["Windows NT 6.4", "Windows 10"],
      ["Windows NT 10.0", "Windows 10 / Windows 11 / Server 2016 / Server 2019 / Server 2022"],
      ["Windows", "WinOther"],
      ["Macintosh", "Macintosh"],
      ["Ubuntu", "Ubuntu"],
      ["Linux", "Linux"],
      ["Android", "Android"],
    ];
    for (_i = 0, _len = token.length; _i < _len; _i++) {
      item = token[_i];
      if (ua.indexOf(item[0]) > -1) {
        return item[1];
      }
    }
    return "Other";
  };

  getUAString = function () {
    return navigator.userAgent;
  };

  getBrowserInfo = function () {
    var item, token, ua, _i, _len;

    ua = navigator.userAgent;
    token = [
      ["Opera", "Opera"],
      //["Presto", "Opera"],
      ["Edg", "Edge"],
      ["Code", "Visual Studio Code"],
      ["curl", "curl"],
      ["Wget", "Wget"],
      ["Electron", "Electron"],
      ["Chrome", "Chrome"],
      ["Safari", "SaFari"],
      ["MSIE 4", "IE 4"],
      ["MSIE 5", "IE 5"],
      ["MSIE 6", "IE 6"],
      ["MSIE 7", "IE 7"],
      ["MSIE 8", "IE 8"],
      ["MSIE 9", "IE 9"],
      ["Trident 6.0", "IE 10"],
      ["Trident 7.0", "IE 11"],
      ["Firefox", "Firefox"],
      ["The World", "世界之窗"],
      ["Maxthon", "遨游"],
      ["QQBrowser", "QQ"],
      ["QQDownload", "QQ"],
      ["360SE", "360"],
      ["SE 2.X", "搜狗"],
      ["UBrowser", "UC"],
      ["UCWEB", "UC"],
      ["Baidu", "百度"],
      ["TencentTravele", "腾讯TT"],
      ["TaoBrowser",  "淘宝"],
      ["LBBROWSER", "猎豹"],
    ];
    for (_i = 0, _len = token.length; _i < _len; _i++) {
      item = token[_i];
      if (ua.indexOf(item[0]) > -1) {
        return item[1];
      }
    }
    return "Other";
  };

  getScreenHeight = function () {
    return window.screen.height;
  },

  getScreenWidth = function () {
    return window.screen.width;
  }

  getCPUNumber = function () {
    return navigator.hardwareConcurrency;
  };

function getCPUArch() {
  var item, token, ua, _i, _len;

  ua = navigator.userAgent;
  token = [
    ["x86", "x86"],
    ["x64", "x64"],
    ["arm", "arm"],
    ["arm64", "arm64"],
    ["ia32", "ia32"],
    ["mips", "mips"],
    ["mips64", "mips64"],
    ["ppc", "ppc"],
    ["ppc64", "ppc64"],
    ["sparc", "sparc"],
    ["sparc64", "sparc64"],
  ];
  for (_i = 0, _len = token.length; _i < _len; _i++) {
    item = token[_i];
    if (ua.indexOf(item[0]) > -1) {
      return item[1];
    }
  }
  return "unknown";
}


  getBaiduInfo = function (cb) {
    var asset, assets;
    asset = "https://www.baidu.com/";
    return jQuery.ajax({
      url: asset,
      dataType: "script",
      success: function () {
        return cb(1);
      },
      error: function () {
        return cb(0);
      },
      timeout: 4000,
    });
  };

  getGoogleInfo = function (cb) {
    var asset, assets;
    asset = "http://www.google.com/";
    return jQuery.ajax({
      url: asset,
      dataType: "script",
      success: function () {
        return cb(1);
      },
      error: function () {
        return cb(0);
      },
      timeout: 4000,
    });
  };

  getGithubInfo = function (cb) {
    var asset, assets;
    asset = "https://github.com/";
    return jQuery.ajax({
      url: asset,
      dataType: "script",
      success: function () {
        return cb(1);
      },
      error: function () {
        return cb(0);
      },
      timeout: 4000,
    });
  };

  isMac = function () {
    return navigator.platform === "MacIntel";
  };

  getPasswordControlVersion = function (cb) {
    light.has("page/products") || light.register("page/products");
    light.has("page/scProducts") ||
      light.register("page/scProducts", light, []);
    return light.ready(function () {
      var edit, options, s;

      s = alipay.security;
      edit;
      options = {
        container: "payPassword_container",
        id: "edit_payPassword",
        name: "edit_payPassword",
        hidnId: "payPassword",
        width: "180",
        height: "24",
        tabindex: "",
        passwordMode: "1",
        timestamp: "8263170979",
        pk: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDS92pDVyWNT7dzG9zH0opH44z9FayCZTX5iqGUxUjPi667IkyaqrsmDPqKsJp47lJ29lzs+Qv8zjPPdmnxjFteMrfpc4ui24gL1iZnchwX87Ox/+Xrm8HFmKlhmUO9n/QgTT+Nz1RGMEN1+HijvsoAhS0TS8XjSfzRkrwvK2pJQIDAQAB",
      };
      edit = window.light.page.products["payPassword"] = s.create(
        s.edit,
        options
      );
      s.edit.installed && edit.render();
      edit.available = true;
      return typeof cb === "function" ? cb(edit.getVersion()) : void 0;
    });
  };

  getPasswordControlInstalledText = function () {
    if (!isMac()) {
      return "已安装";
    }
    return (
      "已安装 (版本号：" +
      macPasswordControlversion +
      ')\n<a href="http://download.alipay.com/sec/edit/wkaliedit.dmg">下载最新版 Mac 安全控件</a>'
    );
  };

  jsonp = function (url, cb) {
    return jQuery.ajax({
      url: url,
      dataType: "jsonp",
      jsonp: "cb",
      success: cb,
    });
  };

  function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  getLDNS = function (cb) {
    var uuid = guid();
    var url =
      "https://" + uuid + ".dns-detect.alicdn.com/api/detect/DescribeDNSLookup";
    return jsonp(url, cb);
  };

  getUrlVia = function (url, cb) {
    var xmlhttp;

    xmlhttp = null;
    if (window.XMLHttpRequest) {
      // code for IE7, Firefox, Opera, etc.
      xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp != null) {
      xmlhttp.onreadystatechange = state_Change;
      xmlhttp.open("GET", url, true);
      xmlhttp.send(null);
    } else {
      alert("Your browser does not support XMLHTTP.");
    }

    function state_Change() {
      if (xmlhttp.readyState == 4) {
        cb(xmlhttp.getAllResponseHeaders());
      }
    }
  };

  log("基础信息", {
    tagname: "h3",
  });

  log("用户代理：" + getUAString());

  log("系统信息：" + getOS());

  log("浏览器信息：" + getBrowserInfo());

  log("屏幕宽度：" + getScreenWidth() + "px");

  log("屏幕高度：" + getScreenHeight() + "px")

  log("逻辑 CPU 数量：" + getCPUNumber())

  log("CPU 架构：" + getCPUArch())

  log("Flash 版本号：" + getFlashVersion());

  log("Cookie 状态：" + (getCookieEnable() ? "开启" : "禁用"));

  log("JavaScript 状态：开启 (版本号：" + JS_VERSION + ")");

  log("LocalStorage 状态：" + (store.enabled ? "开启" : "禁用"));

  log("网络信息", {
    tagname: "h3",
  });

  log("Baidu：检测中...", {
    id: "baidu",
  });
  getBaiduInfo(function (success) {
    var msg;
    msg = success ? "成功" : "失败";
    return log("Baidu：连接" + msg, {
      id: "baidu",
      type: "clear",
    });
  });

  log("Google：检测中...", {
    id: "google",
  });
  getGoogleInfo(function (success) {
    var msg;
    msg = success ? "成功" : "失败";
    return log("Google：连接" + msg, {
      id: "google",
      type: "clear",
    });
  });

  log("Github：检测中...", {
    id: "github",
  });
  getGithubInfo(function (success) {
    var msg;
    msg = success ? "成功" : "失败";
    return log("Github：连接" + msg, {
      id: "github",
      type: "clear",
    });
  });

  log("Local DNS：检测中...", "ldns");

  getLDNS(function (data) {
    var msg;
    msg = "" + data.content.ldns + "<br>本地IP：" + data.content.localIp;
    return log("Local DNS：" + msg, {
      id: "ldns",
      type: "clear",
    });
  });

  log("Via：检测中...", "Via");

  getUrlVia(
    "https://detect.mihoyo.com/detect/ec8abeca2202927815d5e8ea520b9abb.html",
    function (data) {
      var msg;
      console.log(msg);
      msg = data;
      return log("Via：" + msg, {
        id: "Via",
        type: "clear",
      });
    }
  );

  viaOnload = function () {
    var urlvalue = document.getElementById("urlVia").value;
    var urlsp = urlvalue.split("/");
    url =
      urlsp[0] +
      "//" +
      urlsp[2] +
      "/detect/ec8abeca2202927815d5e8ea520b9abb.html";
    getUrlVia(url, function (data) {
      document.getElementById("urlViaRes").innerText = data;
    });
  };
}).call(this);
