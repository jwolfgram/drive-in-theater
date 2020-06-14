var port = '8080',
  express = require('express'),
  app = express(),
  ExpressPeerServer = require('peer').ExpressPeerServer,
  peerServer = ExpressPeerServer(server,{
      path: '/connect'
  }),
  server = require('http').createServer(app),
  path = require('path'),
  bodyParser = require('body-parser');


  server.on('connection', (client) => {
    console.log(Object.keys(client))
    console.log(client._hadError)
    console.log(client.connecting)
   });
// peerjs is the path that the peerjs server will be connected to.
app.use('/peerjs', ExpressPeerServer(server));
app.use('/', express.static('../public'));
// Now listen to your ip and port.
server.listen(8080);