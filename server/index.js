var express = require('express'),
  app = express(),
  port = '8080',
  http = require('http').Server(app),
  path = require('path'),
  bodyParser = require('body-parser');

// io.use(p2p);

// io.on('connection', (socket) => {
//     socket.on("host", function(data) { // accepting host commands for video pause/play etc
//         // think this stuff goes here...
//         // if (req.headers['range']) {
//         //     var range = req.headers.range;
//         //     var parts = range.replace(/bytes=/, "").split("-");
//         //     var partialstart = parts[0];
//         //     var partialend = parts[1];
    
//         //     var start =  parseFloat(partialstart);
//         //     var end = partialend ? parseFloat(partialend) : total-1;
//         //     var chunksize = (end-start)+1;
//         //     console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);
    
//         //     var file = fs.createReadStream(vidPath, {start: start, end: end});
//         //     //res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
//         //     file.pipe(stream); //
//         // } else {
//         //     console.log('ALL: ' + total);
//         //     //res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
//         //     fs.createReadStream(vidPath).pipe(stream); //
//         // }
//         fs.createReadStream(vidPath).pipe(stream);
//         stream.pipe(fs.createReadStream(vidPath))
//         // ss(socket).emit('vid', stream, {name: "../congress-speech.mp4"})
//     })
// })


// app.get('/somethingtoprocess', bodyParser.urlencoded({ extended: false }), function(req, res) {

// });

// app.use('/', express.static('../public'));
// app.use('/js/socket.io-stream.js', express.static('../node_modules/socket.io-stream/socket.io-stream.js'));
// app.use('/js/socket.io-stream.js', express.static('../node_modules/socket.io-stream/socket.io-stream.js'));

// http.listen(port, function() {
//     console.log('listening on *:' + port);
// });



// host will serve audio data only for clients in sync with video...
// host will need to extract audio from the mp4 video playing locally
// host will emit the data base64 for the audio data
// clients can subscruibe to this channel to get the audio data

// Need to establish a P2P connection for streaming
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000});

// https://github.com/socketio/socket.io-p2p/blob/master/examples/streaming/src/index.js
