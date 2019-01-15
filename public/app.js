var express = require('express')
var app = express();
var appcontroller = require('./controllers/appcontroller')

//set up template engine
app.set('view engine','ejs');

//for using static file(css file)
app.use('/assets',express.static('assets'));
appcontroller(app);

//setting up port
app.listen('3000','127.0.0.1');
