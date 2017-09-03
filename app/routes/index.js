var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/aereos')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/aereos/info/:codigo')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};