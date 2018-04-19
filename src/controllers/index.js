const express = require('express');
const router = express.Router();
const path = require('path');

//Import controllers
const home = require('./home');
const error = require('./error');
const coin = require('./coin');


//Create routes
router.get('/', home.get);
router.get('/:coinSym', coin.get);
router.use(error.client);
router.use(error.server);


module.exports = router;
