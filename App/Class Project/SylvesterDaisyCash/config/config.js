var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
var config = {
    development: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 3300,
        db: 'mongodb://127.0.0.1/todo-dev'
    },
    test: {
        root: rootPath,
        app: {  name: 'UCCSS'   },
        port: 3300,
        db: 'mongodb://127.0.0.1/todo-test'
    },

    production: {
        root: rootPath,
        app: { name: 'UCCSS' },
        port: 3300,
        db: 'mongodb://127.0.0.1/todo'
    }
};
module.exports = config[env];