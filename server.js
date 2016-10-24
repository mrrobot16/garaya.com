const express = require('express');
const path = require('path');
let app = express();
let port = process.env.PORT || 5000
// // expose node_modules to client app
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/assets"));
// app.use(express.static(path.join(__dirname, '/assets')));
app.get('/', function(req, res) {
        res.sendfile('./landing.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
app.listen(port);
module.exports = app;
