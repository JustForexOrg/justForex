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

var mongo = require('mongodb').MongoClient;
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
let clientListNames = [];
server.listen(8000);
io.set("origins", "*:*");

io.on('connection', function (socket) {
    console.log('a user connected');

    // hook up to the “disconnect” event for each socket
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    // any message received on the “chat” channel will be broadcasted it to all the other connections on this socket.
    // listen to the “chat” channel and call emit with the broadcast flag in the callback for the “connection” event.
    socket.on('chat', function (msg) {
        socket.broadcast.emit('chat', msg);
    });
});
