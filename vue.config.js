const { defineConfig } = require('@vue/cli-service');

const path = require('path'); //path模块
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true,

    chainWebpack: config => {
        //修改文件引入自定义路径
        config.resolve.alias.set('@', resolve('src')).set('assets', resolve('@/assets'));
    },
});
