var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var modRewrite = require('connect-modrewrite');

var app = express();

var livereload;
if (process.env.NODE_ENV !== 'production') {
    livereload = require('express-livereload');
    livereload(app, config = {
        watchDir: "assets"
    });
}

// <script>
//   document.write('<script src="http://' + (location.host || 'localhost')
//     .split(':')[0] + ':35729/livereload.js"></' + 'script>')
// </script>

app.set('port', (process.env.PORT || 3333));

app.use(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

app.use('/', express.static(path.join(__dirname, '')));
// app.use('/', express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});