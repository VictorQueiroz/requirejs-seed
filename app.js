var express = require('express');
var app = express();

var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(path.join(__dirname, 'bower_components')));
app.use('/js', express.static(path.join(__dirname, 'src', 'js')));

app.use('*', function (req, res) {
	res.render('index');
});

app.listen(3000);