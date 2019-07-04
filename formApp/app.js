var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressLayout = require('express-ejs-layouts');

var db = require('./App/models/db');

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/App/views'));
app.set('view engine', 'ejs');
app.use(expressLayout);


require('./App/routes/routeManager')(app);
app.listen(8000);