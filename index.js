var express = require('express');
var keys = require('./keys');

var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(keys.port, function() {
    console.log('full steam ahead on port ' + keys.port)
})
