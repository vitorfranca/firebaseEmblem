var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var livereload = require('express-livereload');
var app = express();

livereload(app);
// <script>
//   document.write('<script src="http://' + (location.host || 'localhost')
//     .split(':')[0] + ':35729/livereload.js"></' + 'script>')
// </script>

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '')));
// app.use('/', express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});