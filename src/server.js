var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
// var users = require('./routes/users');
var photos = require('./routes/photos');
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
app.use('/upload', photos);
app.use('/api/authenticate', authenticate);
app.use('*', index);

app.listen(port, function(){
    console.log('Server started on port '+port);
});

// SocketIO for real time chat update
var mongo = require('mongodb').MongoClient;
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
let clientListNames = [];
server.listen(8000);
io.set("origins", "*:*");

io.sockets.on('connection', function(socket) {
    console.log('Socket connected');

    //Socket event for message created
    socket.on('messageSaved', function(messageSaved) {
        socket.broadcast.emit('messageSaved', messageSaved);
    });

    //Socket event for gist updated
})
// SocketIO for real time chat update
