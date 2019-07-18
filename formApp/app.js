var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var expressLayout = require('express-ejs-layouts');
var db = require('./App/models/db');
var db = require('./App/models/users');

app.use(express.static(path.join(__dirname, '/public'))); //public dosyalarını kullanılır hale getirdik.
app.set('views', path.join(__dirname, '/App/views')); //view aktif ettik
app.set('view engine', 'ejs'); //view de  ejs kullanak için  aktiflik kullandık.
app.use(expressLayout); //ejs kullanılır hale geldi.

app.use(bodyParser.urlencoded({ extended: true })); //post dataları yakalamaya yarar.

app.use(bodyParser.json());
console.log("ddddd");





require('./App/routes/routeManager')(app);
app.listen(3000);