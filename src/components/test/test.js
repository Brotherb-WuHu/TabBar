const { resolve, reject } = require('core-js/fn/promise');

// 以前
setTimeout(() => {
    console.log('hello world');
}, 1000);

// promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        // 一旦调用 resolve
        resolve('hello');
    }, 1000);
}).then(data => {
    console.log(data);
});
