var socket = io(); //critical

socket.on('connect', function() {
  console.log('connected to server');
  socket.emit('createMessage', {
    from: 'The Beasty Boys',
    text: 'No sleep til Brooklyn'
  });
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});
  
socket.on('newMessage', function(message) {
  console.log('Sent new message from client to server', message)
});