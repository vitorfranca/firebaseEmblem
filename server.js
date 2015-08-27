var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var modRewrite = require('connect-modrewrite');
// var livereload = require('express-livereload');

var app = express();

// livereload(app, config = {
//     watchDir: "assets"
// });

// <script>
//   document.write('<script src="http://' + (location.host || 'localhost')
//     .split(':')[0] + ':35729/livereload.js"></' + 'script>')
// </script>

app.set('port', (process.env.PORT || 3333));

app.use(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

var dirname = process.cwd() || __dirname;

app.use('/', express.static(path.join(dirname, '')));
// app.use('/', express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});