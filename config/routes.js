module.exports = function(app, bootstrap, utils) {

	let models = bootstrap.loadModels(utils);
    let ctrls = bootstrap.loadControllers(utils, models);

    // use routes
    for (ctrl in ctrls) {
        app.get('/api/' + ctrl + '/:id([0-9a-f]+)', ctrls[ctrl].get);
        app.post('/api/' + ctrl, ctrls[ctrl].create);
        app.put('/api/' + ctrl + '/:id([0-9a-f]+)', ctrls[ctrl].update);
        app.delete('/api/' + ctrl + '/:id([0-9a-f]+)', ctrls[ctrl].remove);
    }

    // Catch-all
    app.get('*', function(req, res) { res.status(404).json({ error:'Invalid GET request' }) });
    app.post('*', function(req, res) { res.status(404).json({ error:'Invalid POST request' }) });
    app.delete('*', function(req, res) { res.status(404).json({ error:'Invalid DELETE request' }) });
};
