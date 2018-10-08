const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// set bodyParsers to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // for use with querystrings

// serve static files from /public
// __dirname: file path from the server's root to our applications root folder
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');

// include routes
const routes = require('./routes/routes');
app.use('/', routes);

// listen on port 5000
app.listen(5000, function() {
  console.log('\n  *  *  *  Portfolio running on port 5000  *  *  *\n');
});
