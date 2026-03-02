// Copyright (c) B84F2246
// Author: B84F2246
// fun_title.js
/////////////////////////
(function() {
    // 配置项
    const CONFIG = {
        leaveText: "你干嘛去👀", 
        returnTexts: [
            "哟，回来了！✨", 
            "这是什么？标题？看一下。"

        ],
        restoreDelay: 2000, // 基础恢复时间 (ms)
        minRandomDelay: 1000, // 随机额外时间下限
        maxRandomDelay: 2000  // 随机额外时间上限
    };

    let originTitle = document.title;
    let timer = null;
    let isReturning = false; // 标记是否正在执行“返回”逻辑

    // 生成随机欢迎语
    function getRandomReturnText() {
        const index = Math.floor(Math.random() * CONFIG.returnTexts.length);
        return CONFIG.returnTexts[index];
    }

    // 生成随机延迟时间
    function getRandomDelay() {
        return CONFIG.restoreDelay + Math.floor(Math.random() * (CONFIG.maxRandomDelay - CONFIG.minRandomDelay + 1) + CONFIG.minRandomDelay);
    }

    function handleVisibilityChange() {
        if (document.hidden) {
            // --- 页面隐藏 (用户离开) ---
            
            // 1. 立即清除之前的恢复定时器，防止逻辑冲突
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            
            // 2. 修改标题
            document.title = CONFIG.leaveText;
            isReturning = false;

        } else {
            // --- 页面显示 (用户返回) ---
            
            // 如果已经在执行返回逻辑，避免重复触发
            if (isReturning) return;
            isReturning = true;

            // 1. 修改为随机欢迎语
            document.title = getRandomReturnText();

            // 2. 设置新的恢复定时器
            const delay = getRandomDelay();
            timer = setTimeout(() => {
                // 双重检查
                if (!document.hidden) {
                    document.title = originTitle;
                }
                isReturning = false;
                timer = null;
            }, delay);
        }
    }

    // 监听事件
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 页面卸载时清理
    window.addEventListener("beforeunload", () => {
        if (timer) clearTimeout(timer);
    });

    // 初始化,确保标题是原始的
    if (!document.hidden) {
        document.title = originTitle;
    }
})();
