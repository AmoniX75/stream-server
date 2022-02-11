var udp = require('dgram');
var tcp = require('net');

var udpserv = udp.createSocket('udp4');


var tcpserv = tcp.createServer({
    allowHalfOpen : true,    
},function(socket) {
    socket.setKeepAlive(true);
    udpserv.on('message', function(msg){
        socket.write(Buffer.from(msg));
    });

    socket.on('close', function() {

    });
    socket.on('error', function() {

    });
    socket.on('end', function() {

    });
});

udpserv.bind(1112);
tcpserv.listen(1111, "0.0.0.0");

