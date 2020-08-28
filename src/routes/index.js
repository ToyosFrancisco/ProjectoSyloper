// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');



// JSON
const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8'))
const infoFilePath = '../data/data.json'

module.exports ={
	info :() => parsingFile(infoFilePath),
}


// ************ Controller Require ************
const mainController = require('../controllers/mainController');


/* GET - home page. */
router.get('/', mainController.home);
router.get('/carrito',mainController.carrito);
router.get('/detalle', mainController.detalle);
router.get('/comprar',mainController.comprar)




module.exports = router;