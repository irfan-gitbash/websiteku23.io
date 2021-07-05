const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public')); 
const router = require('./routes/index.js');
app.use('/',router);

app.listen(port);

console.log('connected to port: ' + port);