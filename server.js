'use strict';

var Server = require('astros').server;

var s = new Server({
    dirname:__dirname,
    siteCfg:require('./config/site.js')
})
s.start();