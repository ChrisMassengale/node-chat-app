require('./config/config');

const http = require('http');
const express = require('express');
const path = require('path');  //Don't need to install , part of nodejs
const socketIO = require('socket.io');


const publicPath = path.join(__dirname,"..", "public");

const port = process.env.PORT;

let app = express();
let server = http.createServer(app);

let io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected!')
  });
}); //turns on
// app.use(express.static(publicPath)) //Used in video to display the index

app.get('/', (request, response) => {
  response.status(200).sendFile(publicPath + "/index.html");
});



server.listen(port, () => {
  console.log(`Server is up and running on Port: ${port}`)
});

