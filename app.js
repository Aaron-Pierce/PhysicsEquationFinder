let app = require('express')();
let compression = require('compression');
let http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendfile('./index.html')
});

app.use(compression())
app.use(require('express').static('./'));

http.listen(3000, function () {
    console.log('listening on *:3000')
});