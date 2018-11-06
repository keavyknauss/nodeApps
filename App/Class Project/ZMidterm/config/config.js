var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
var config = {
    development: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 3300,
        db: 'mongodb://127.0.0.1/foobar-dev'
    },
    test: {
        root: rootPath,
        app: {  name: 'UCCSS'   },
        port: 5000,
        db: 'mongodb://127.0.0.1/foorbar-test'
    },

    production: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 80,
        db: 'mongodb://127.0.0.1/foobar'
    }
};
module.exports = config[env];