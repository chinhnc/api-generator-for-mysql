'use strict';

module.exports = function(config, utils, Model) {
    let obj = {};

    obj.get = (req, res) => {
    	Model.forge().where({ id: req.params.id }).fetchAll()
			.then((greeting) => {
				return res.json(user);
			})
			.catch((error) => {
    			return res.json({ message: 'fails', error: error });
			});
    }

    obj.create = (req, res) => {
    	Model.forge().save(req.body, { method: 'insert' })
    		.then((user) => {
    			return res.json({ message: 'success', result: user });
    		})
    		.catch((error) => {
    			return res.json({ message: 'fails', error: error });
    		});
    }

    obj.update = (req, res) => {
    	Model.forge().where({ id: req.params.id })
    		.save(req.body, { method: 'update' })
    		.then((user) => {
				return res.json({ message: 'success', result: user });
    		})
    		.catch((error) => {
    			return res.json({ message: 'fails', error: error });
    		});
    }

    obj.remove = (req, res) => {
    	Model.forge({ id: req.params.id })
    		.destroy()
    		.then((user) => {
    			return res.json({ message: 'success', deleted: user });
    		})
    		.catch((error) => {
    			return res.json({ message: 'error', error: error });
    		});
    }
    
    return obj;
};
