require('./config/config');


const express = require('express');
const path = require('path');  //Don't need to install , part of nodejs

const publicPath = path.join(__dirname,"..", "public");

const port = process.env.PORT;

let app = express();

// app.use(express.static(publicPath))

app.get('/', (request, response) => {
  response.status(200).sendFile(publicPath + "/index.html");
});



app.listen(port, () => {
  console.log(`Server is up and running on Port: ${port}`)
});

