// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');


/* GET - home page. */
router.get('/', mainController.home);
router.get('/carrito',mainController.carrito);
router.get('/detalle', mainController.detalle);
router.get('/comprar',mainController.comprar)


module.exports = router;