var routes = require('./home');





module.exports = function(app) {
    app.use('/', routes);

}