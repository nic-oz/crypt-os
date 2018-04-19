const express = require('express');
const router = express.Router();
const path = require('path');


//Import controllers
const home = require('./home');

//Create routes
router.get('/', home.get);

module.exports = router;