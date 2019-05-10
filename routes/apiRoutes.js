var db = require('../models');

module.exports = function(app) {
  app.get('/api/seq', function(req, res) {
    db.training2.findAll({}).then(function(infoData) {
      res.json(infoData);
    });
  });

  app.post('/api/seq', function(req, res) {
    db.training2
      .create({
        title: req.body.title,
        text: req.body.text
      })
      .then(function(infoData) {
        res.json(infoData);
      });
  });
};
