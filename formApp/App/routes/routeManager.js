var routes = require('./home');
var routesLogin = require('./login');




module.exports = function(app) {
    app.use('/', routes);
    app.use('/login', routesLogin);
}