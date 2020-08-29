// REQUIRE
const fs = require('fs');
const path = require('path');

// RUTAS
const controller = {
	home: (req, res) => {
		res.render('index');
	},
	carrito: (req, res) => {
		res.render('carrito');
	},
	detalle: (req, res) => {
		res.render('detalle');
	},
	comprar: (req,res) => {
		res.render('comprar')
	
	}

	
	
};


module.exports = controller;