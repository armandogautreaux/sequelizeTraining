var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
