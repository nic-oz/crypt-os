const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//require controllers
const controllers = require('./controllers/index');

const app = express();

//set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    // helpers,
  })
);

//setup server
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname,'..','public')))
app.use(controllers);

module.exports = app;
