var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
    .use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
    .use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
    .use(function (req, res) { // Répond enfin
        res.send('Hello');
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});