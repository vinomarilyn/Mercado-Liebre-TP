const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');// RESUMEN DE LA RUTA
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//lee json y lo pasa a javascrip base de datos parceada


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	// Root - Show all products
        	index: (req, res) => {
let productos = products.filter(product => product) 
		
	     res.render('products', {
		 productos,
		 products,
	     title:"Todos los productos",
     	 toThousand
	    	}) 
    	},

	// Detail - Detail from one product PASO 2. DEFINIMOS LOS PARAMETROS 
	detail: (req, res) => {
		let productId = +req.params.id; //id parametro
        let product = products.find(product => product.id === productId)

		res.render('detail', {
			product,
			products,
			toThousand,
			title:""

		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form',{
			title:""
		})
	},
	
         	// Create -  Method to store
	           store: (req, res) => {
	        //	const { name, price, discount, category, description } = req.boby
        
                 res.send(req.boby)
	

            	},
			


}

module.exports = productsController;