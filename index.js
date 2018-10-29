var express    = require('express');
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');
var app        = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile('index.html')
});

app.use('/api/todos', todoRoutes);

app.listen('8000', function() {
    console.log("Starting server on port 8000.\n");
});
