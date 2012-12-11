var sys = require("sys")
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(80);

function handler (req, res) {
  	sys.debug(__dirname);
  fs.readFile(__dirname + '/WebsocketLearn.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading WebsocketLearn.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.on('my other event', function (data) {
    console.log('recieved data : transamitting');
    socket.emit('news', data);
  });
});