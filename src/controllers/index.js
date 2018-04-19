const express = require('express');
const router = express.Router();
const path = require('path');


//Import controllers
const home = require('./home');
const coin = require('./coin');

//Create routes
router.get('/', home.get);
router.get('/:coinSym', coin.get);

module.exports = router;
