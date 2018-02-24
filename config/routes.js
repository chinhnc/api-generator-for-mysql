module.exports = function(app, bootstrap, utils) {

	let models = bootstrap.loadModels(utils);
    let ctrls = bootstrap.loadControllers(utils, models);

    // use routes
    app.get('/api/greeting/:id([0-9a-f]+)', ctrls['greeting'].get);
    app.post('/api/greeting', ctrls['greeting'].create);
    app.put('/api/greeting/:id([0-9a-f]+)', ctrls['greeting'].update);
    app.delete('/api/greeting/:id([0-9a-f]+)', ctrls['greeting'].remove);

    // Catch-all
    app.get('*', function(req, res) { res.status(404).json({ error:'Invalid GET request' }) });
    app.post('*', function(req, res) { res.status(404).json({ error:'Invalid POST request' }) });
    app.delete('*', function(req, res) { res.status(404).json({ error:'Invalid DELETE request' }) });
};
