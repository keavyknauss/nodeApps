var express = require('express');
var config = require('./config/config');
var logger = require('./config/logger'); 

var app = express();

var port = process.env.port || 3300

require('./config/express')(app, config);

require('http').createServer(app).listen(port, function () {
    console.log("HTTP Server listening on port: %d, in %s mode", port, app.get('env'));
});

module.exports = app;