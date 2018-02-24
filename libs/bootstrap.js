module.exports = function(config) {
    const fs = require('fs');
    let obj = {};

    obj.loadControllers = function(utils, models) {
        let ctrls = {};
        const ctrlsPath = config.root + '/app/controllers';
        fs.readdirSync(ctrlsPath).forEach(function(file) {
            if(file.indexOf('.js') > 0) {
                ctrls[file.replace('.js','')] = require(ctrlsPath + '/' + file)(config, utils, models[file.replace('.js','')]);
                console.log('Loaded: ' + file.replace('.js','') + ' controller.');
            }
        });

        return ctrls;
    };

    obj.loadModels = (utils) => {
        const connect = utils.connectDB();
        let models = {};
        const modelsPath = config.root + '/app/models';

        fs.readdirSync(modelsPath).forEach((file) => {
            if(file.indexOf('.js') > 0) {
                models[file.replace('.js','')] = require(modelsPath + '/' + file)(config, utils, connect);
                console.log('Loaded: ' + file.replace('.js','') + ' model.');
            }
        });

        return models;
    }

    return obj;
};
