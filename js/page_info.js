// Copyright (c) B84F2246
// Author: B84F2246
// page_info.js
/////////////////////////
function loadTime() {
  var loadTime =
    window.performance.timing.fetchStart -
    window.performance.timing.domComplete;
  loadTime = loadTime / 10000000000000;
  return parseFloat(loadTime.toFixed(2));
}
const load_time = loadTime();

function countRequests() {
  let count = 0;
  for (const request of window.performance.getEntries()) {
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
