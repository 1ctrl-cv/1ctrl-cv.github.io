// Copyright (c) B84F2246
// Author: B84F2246
// page_info.js
/////////////////////////
// 定义函数loadTime，用于计算页面加载时间
function loadTime() {
  // 声明变量loadTime
  var loadTime;
  // 如果window.performance.now存在
  if (window.performance.now) {
    // 计算loadTime，fetchStart减去now()
    loadTime = window.performance.timing.fetchStart - window.performance.now();
    // 将loadTime转换为秒
    loadTime = loadTime / 10000000000000;
  } else {
    // 计算loadTime，domComplete减去fetchStart
    loadTime = window.performance.timing.domComplete - window.performance.timing.fetchStart;
    // 将loadTime转换为秒
    loadTime = loadTime / 1000;
  }
  // 打印loadTime
  console.log(loadTime)
  
  // 返回loadTime，保留两位小数
  return parseFloat(loadTime.toFixed(2));
}

const load_time = loadTime();

function countRequests() {
  let count = 0;
  for (const _request of window.performance.getEntries()) {
    count++;
  }
  return count;
}
const request_count = countRequests();

function getMemoryUsage() {
  const mem = window.performance.memory;
  const usedJSHeapSize = mem.usedJSHeapSize;
  const usedJSHeapSizeMB = usedJSHeapSize / (1024 * 1024 * 8);
  return usedJSHeapSizeMB.toFixed(3);
}
const memory_usage = getMemoryUsage();

// console.log("耗时 " + [load_time] + " 秒 | 请求 " + [request_count] + "次 | 内存 " + [memory_usage] + " MB")
document.write(
  "耗时 " +
    [load_time] +
    " 秒 | 请求 " +
    [request_count] +
    " 次 | 内存 " +
    [memory_usage] +
    " MB"
);
