var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
// var users = require('./routes/users');
var data  = require('./routes/data');
var authenticate = require('./routes/authenticate');
var chat = require('./routes/chat');

var port = 4200;
var app = express();

//View Engine
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, 'app')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', tasks);
app.use('/data', data);
// app.use('/api/users', users);
app.use('/api/chat', chat);
app.use('/api/authenticate', authenticate);
app.use('*', index);

app.listen(port, function(){
    console.log('Server started on port '+port);
});

var io = require('socket.io')(3000),
MongoClient = require('mongodb').MongoClient,
mongoAdapter = require('socket.io-mongodb'),
client;

MongoClient.connect('mongodb://justforex:ahdgmypnd20@ds157631.mlab.com:57631/justforex', function(err, db) {
    io.adapter(mongoAdapter({
        mongoClient: db
    }))
})
