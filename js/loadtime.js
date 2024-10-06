function pjaxLoadTime() {
    // 获取当前时间
    const startTime = new Date().getTime();
    // 监听pjax完成事件
    document.addEventListener('pjax:complete', () => {
        // 计算总加载时间
        const endTime = new Date().getTime();
        const totalLoadTime = endTime - startTime;

        // 输出总加载时间
        console.log('Total load time:', totalLoadTime, 'ms');
    });
}

// 最后，在页面加载完成后调用`pjaxLoadTime`函数
pjaxLoadTime();

console.log(`导航开始时间: ${performance.timing.navigationStart}`);
console.log(`资源获取开始时间: ${performance.timing.fetchStart}`);
console.log(`DOMContentLoaded 事件开始时间: ${performance.timing.domContentLoadedEventStart}`);
console.log(`load 事件开始时间: ${performance.timing.loadEventStart}`);

console.log(`JavaScript 堆大小限制: ${performance.memory.jsHeapSizeLimit}`);
console.log(`已使用的 JavaScript 堆大小: ${performance.memory.usedJSHeapSize}`);
console.log(`JavaScript 堆的总大小: ${performance.memory.totalJSHeapSize}`);

const entries = performance.getEntriesByType('navigation');
const navigationTiming = entries[0];

console.log(`重定向时间: ${navigationTiming.redirectTime}`);
console.log(`DOM 解析完成时间: ${navigationTiming.domInteractiveTime}`);
console.log(`DOMContentLoaded 事件触发时间: ${navigationTiming.domContentLoadedTime}`);
console.log(`load 事件触发时间: ${navigationTiming.loadEventTime}`);

const startTime = performance.timing.navigationStart;
const loadTime = (performance.timing.loadEventStart - startTime)*-1;

console.log(`页面加载时间: ${loadTime} 毫秒`);

const resourceEntries = performance.getEntriesByType('resource');
resourceEntries.forEach((entry) => {
  console.log(`资源 URL: ${entry.name}`);
  console.log(`资源加载时间: ${entry.duration} 毫秒`);
  console.log(`资源大小: ${entry.transferSize} 字节`);
});