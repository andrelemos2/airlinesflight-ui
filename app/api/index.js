var db = require('../../config/database');

var api = {}

api.busca = function(req, res) {
   db.findOne({_id: req.params.codigo }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.lista = function(req, res) {
    db.find({}).sort({codigo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

module.exports = api;