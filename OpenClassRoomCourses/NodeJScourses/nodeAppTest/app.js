var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')) // Active le middleware de logging
    .use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
    .use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
    .use(function(req, res){ // Répond enfin
        res.send('Hello');
    });

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/etage/:etagenum/chambre', function (req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/compter/:nombre', function (req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('compteur.ejs', {compteur: req.params.nombre, noms: noms});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});