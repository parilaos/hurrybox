var socket = io();

socket.on('connect',function() {
    console.log('connected to server');

    socket.emit('Courier', {
        user:'pelatis',
        from:'paris',
        origin: 'ilion',
        destination:'athnes',
        item:'box',
        time:'44'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected')
});

socket.on('courierOrder', function (courier) {
    console.log('εντολή μεταφοράς', courier)
});

