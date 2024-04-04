var loadTime = window.performance.timing.navigationStart - window.performance.timing.domContentLoadedEventEnd;
window.load_time = loadTime / 10000000000000;
window.load_time = parseFloat(window.load_time.toFixed(2));

function getMemoryUsage() {
    const mem = window.performance.memory;
    const usedJSHeapSize = mem.usedJSHeapSize;
    const usedJSHeapSizeMB = usedJSHeapSize / (1024 * 1024 * 8);
    return usedJSHeapSizeMB.toFixed(3);
}
const memory_usage = getMemoryUsage();

function countRequests() {
    let count = 0;
    for (const request of window.performance.getEntries()) {
        count++;
    }
    return count;
}
const request_count = countRequests();

// console.log("耗时 " + [load_time] + " 秒 | 请求 " + [request_count] + "次 | 内存 " + [memory_usage] + " MB")
document.write("耗时 " + [load_time] + " 秒 | 请求 " + [request_count] + " 次 | 内存 " + [memory_usage] + " MB")
