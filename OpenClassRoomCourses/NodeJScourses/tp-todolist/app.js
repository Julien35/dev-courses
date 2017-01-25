const express = require('express');
const logger = require('morgan');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}));

app.use(function (req, res, next) {
    if (typeof (req.session.todolist) == 'undefined') {
        req.session.todolist = [
            'Faire les courses',
            'Nourrir le chat',
            'Arroser les plantes',
            'Lire la suite du tuto sur Node.js'
        ];
    }
    next();
});

// Gestion des routes en-dessous
/* On affiche la todolist et le formulaire */
app.get('/todo', function (req, res) {
    console.log(req.session.todolist);
    res.render('pages/index', {
        todolist: req.session.todolist
    });
});

/* On ajoute un élément à la todolist */
app.post('/todo/ajouter/', urlencodedParser, function (req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
});

/* Supprime un élément de la todolist */
app.get('/todo/supprimer/:id', function (req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
app.use(function (req, res, next) {
    res.redirect('/todo');
});

module.exports = app;
