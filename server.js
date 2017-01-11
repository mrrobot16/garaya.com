const express = require('express');
const path = require('path');
const open = require('open');
var app = express();
var port = process.env.PORT || 5000
// // expose node_modules to client app
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/assets"));
app.get('/', function(req, res) {
        res.sendfile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
app.listen(port);
console.log("Go to localhost:5000");
open("http://localhost:5000");
module.exports = app;
