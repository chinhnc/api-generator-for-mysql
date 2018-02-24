'use strict';

module.exports = function(config, utils, Model) {
    let obj = {};

    obj.get = (req, res) => {
    	Model.forge().where({ id: req.params.id }).fetchAll()
			.then((greeting) => {
				return res.json(greeting);
			})
			.catch((error) => {
    			return res.json({ message: 'fails', error: error });
			});
    }

    obj.create = (req, res) => {
    	Model.forge().save(req.body, { method: 'insert' })
    		.then((greeting) => {
    			return res.json({ message: 'success', result: greeting });
    		})
    		.catch((error) => {
    			return res.json({ message: 'fails', error: error });
    		});
    }

    obj.update = (req, res) => {
    	Model.forge().where({ id: req.params.id })
    		.save(req.body, { method: 'update' })
    		.then((greeting) => {
				return res.json({ message: 'success', result: greeting });
    		})
    		.catch((error) => {
    			return res.json({ message: 'fails', error: error });
    		});
    }

    obj.remove = (req, res) => {
    	Model.forge({ id: req.params.id })
    		.destroy()
    		.then((greeting) => {
    			return res.json({ message: 'success', deleted: greeting });
    		})
    		.catch((error) => {
    			return res.json({ message: 'error', error: error });
    		});
    }
    
    return obj;
};
