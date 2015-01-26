var express = require('express')

var env = process.env.NODE_ENV || 'development';//if this var hasn't been set set it

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){//whenever they go to any part of the website this is done//client/server routing: doing client routing here

res.render('index');

}

app.listen(80);