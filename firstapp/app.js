var fs=require('fs')
var express=require('express');
var app =express();
var path = require('path');
var routes = require('./appServer/routes/index');
var expressLayouts = require('express-ejs-layouts');

app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/appServer/views'));
app.set('view engine','ejs')
app.use(expressLayouts);
app.use('/', routes);

 
app.listen(8000);