var nodeFS = require('fs');
var nodePath = require('path');
var ver_cache = {};
module.exports = {
    // env: 'development',
    // 服务器端口，默认从3100开始尝试
    //port: 3103,
    openTag:"<%",
    closeTag:"%>",
    // 站点根目录
    root: require('path').join(__dirname, '..'),
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'tpls'),
    proxy: {
        '/aj': {
            hostname: 'www.baidu.com',
            port: 80,
            url: '/',
            headers: {}
        }
    },
    siteMap:{
        // 站点地图路径
        route: '/',
        des: {
            name: 'Astros示例站点',
            wd:'kumaw,ringcrazy',
            product:'wheasy',
            developer:'aimar'
        }        
    },
    // 是否自动启用静态资源服务器
    autoAsset: true,
    // 模板全局属性
    globalVariables: {
        //默认不写，以本机ip为主
        // cdn: 'http://127.0.0.1:3104/'
        ver: function() {
            return Date.now;
        }
        //静态资源请求地址，默认不写，以本机ip为主
        // assetsUrl:'http://127.0.0.1:3104/'
    }
};