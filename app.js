var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

const PORT = process.env.PORT || 5000

// creating routes
const home = require('./routes/index');


var app = express();
// global variables
app.locals.title = 'shopping site';

// view engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine' , 'pug');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:"abcdefghijklm", resave:false,saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));


// routing the views
app.use('/', home);

app.listen(PORT, function(err , result){
	if(err){
		colsole.log(err);
	}
	console.log('server started on port ' + PORT);
});