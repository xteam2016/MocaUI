/**
 * @title: 示例页面
 * @html: demo
 * @ctime: 2015/10/09
 * @edittime: 2016-03-14 15:33:29
 * @wd: wheasy
 * @router: /demo
 */
var router = require('express').Router(); // 新建一个 router
router.get('/demo', function(req, res) {
    res.render('demo', {
        title:'首页'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router

// astro.page({
//     router  : '',
//     tpl     : '',
//     data    :{
//         title:  ''
//     }
// });

// astro.page('/', 'index', {});
