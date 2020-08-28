const fs = require('fs');
const path = require('path');

// let infoPath = path.join(__dirname,'..','data','data.json');
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// function getInfo() {
// 	let info = fs.readFileSync(infoPath, "utf8")
//     return info != '' ? JSON.parse(info) : []
// };

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