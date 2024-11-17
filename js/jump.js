// Copyright (c) B84F2246
// Author: B84F2246
// jump.js
/////////////////////////
const whiteDomList = ['b84f2246.top', 'example.com', "example.net"]
function safeA(whiteDomList, safeLink = 'https://link.b84f2246.top?target=') {
    const aArr = document.getElementsByTagName('a')
    Array.from(aArr).forEach(item => {
        item.onclick = () => {
            let target = item.getAttribute('href')
            if (/^\//.test(target)) {
                return true
            }
            const isSafe = undefined !== whiteDomList.find(item => {
                return target.indexOf(item) !== -1
            })
            if (!isSafe) {
                window.open(`${safeLink}${target}`, '_blank')
            } else {
                return true
            }
            return false
        }
    })
}

