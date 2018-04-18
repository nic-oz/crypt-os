const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

//set up view engine


//setup server
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname,'..','public')))

module.exports = app;
