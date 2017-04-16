var express = require('express');

// create our app
var app = express();

// tell it which folder to serve
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '../client/index.html');
            });

// start server
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});