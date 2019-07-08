var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressLayout = require('express-ejs-layouts');
var db = require('./App/models/db');
var db = require('./App/models/users');

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/App/views'));
app.set('view engine', 'ejs');
app.use(expressLayout);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
console.log("ddddd");





require('./App/routes/routeManager')(app);
app.listen(3000);