// Copyright (c) XluoFox.DSY, B84F2246
// Author: XLuoFox.DSY, B84F2246
// festival.js
//////////////////////////////////////
function festival() {
  // 定义节日和祝福语
  const list = {
    "01-01": "新年快乐！愿你在新的一年里万事如意，心想事成！",
    "02-14": "情人节快乐！愿你和你爱的人幸福美满，永浴爱河！",
    "03-08": "妇女节快乐！愿全天下的女性都能健康美丽，自信独立！",
    "04-01": "愚人节快乐！开怀大笑，轻松一下，愿你每一天都开心愉快！",
    "05-01": "劳动节快乐！向所有辛勤工作的劳动者致敬，愿你们节日愉快！",
    "06-01": "儿童节快乐！愿所有的孩子们都能健康成长，快乐无忧！",
    "06-15": "祝本站生日快乐！感谢一路有你，未来更精彩！",
    "07-01": "建党节快乐！愿我们的党永远年轻，永远强大！",
    "08-01": "建军节快乐！愿我们的军队威武雄壮，国泰民安！",
    "09-10": "教师节快乐！感谢所有辛勤工作的老师们，您们辛苦了！",
    "10-01": "国庆节快乐！愿我们的国家繁荣昌盛，人民幸福安康！",
    "12-21": "今天是站长生日（大声",
    "12-25": "圣诞节快乐！愿你度过一个温馨、愉快的圣诞节！",
    "12-31": "跨年夜快乐！愿新的一年带给你无尽的快乐和惊喜！",
  };

  // 获取当前日期
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 获取月份并格式化为两位数字
  const day = String(today.getDate()).padStart(2, "0"); // 获取日期并格式化为两位数字
  const formatDate = `${month}-${day}`; // 将月份和日期组合成MM-DD格式

  console.log("节日系统 > \n 当前日期：" + formatDate);
  // const festivalDiv = document.getElementById("festival");

  if (list[formatDate]) {
    // 检查今天是否是节日
    // festvalDiv.textContent = list[formatDate]; // 显示对应的祝福语
    console.log("节日系统 > \n 显示祝福语：" + list[formatDate]);
  } else {
    // festvalDiv.textContent = "今天没有特别的节日"; // 显示默认信息
    console.warn("节日系统 > \n 今天没有特别的节日，奖励你一个警告[doge]");
  }
}
festival()
