const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

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

// index page
app.get('/', function (req, res) {

    var todolist = [
        {id: 1, task: 'Faire les courses'},
        {id: 2, task: 'Nourrir le chat'},
        {id: 3, task: 'Arroser les plantes'},
        {id: 4, task: 'Lire la suite du tuto sur Node.js'}
    ]
    res.render('pages/index', {
        todolist: todolist
    });
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

module.exports = app;
