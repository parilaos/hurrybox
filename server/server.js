const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.set('port', (process.env.PORT || 3000));
app.use(express.static(publicPath));

io.on('connection', (socket) => {

    // socket.emit('courierOrder', {
    //     user:'test',
    //     from:'paris',
    //     origin: 'ilion',
    //     destination:'athnes',
    //     item:'box',
    //     time:'44'
    // });

    socket.on('Courier', (courierOrder) => {
        console.log('Courier', courierOrder)
    });

    // socket.on('disconnect', () => {
    //     console.log('user left');
    // });
});

server.listen(app.get('port'), () => {
    console.log('app is running on port', app.get('port'));
  });
  