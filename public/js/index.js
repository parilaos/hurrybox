var socket = io();

socket.on('connect',function() {
    console.log('connected to server');


});

socket.on('disconnect', function () {
    console.log('Disconnected')
});

socket.on('newCourierOrder', function (courierOrder) {
    console.log('εντολή μεταφοράς', courierOrder)
});

