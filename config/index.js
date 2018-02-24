var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = 3000;

var config = {
    development: {
        root: rootPath,
        port: port
    },

    production: {
        root: rootPath,
        port: port
    }
};

module.exports = config[env];
