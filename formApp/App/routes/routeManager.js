var routes = require('./home');
var route = require('./login');

module.exports = function(app) {
    app.use('/', routes);
    app.use('/login', routes);


}