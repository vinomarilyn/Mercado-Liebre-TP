let { getProducts, writeJson } = require('../data/DataBase');
let products = getProducts;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	// Root - Show all products
        	index: (req, res) => {
	        	res.render('products', {
      			products,
	    		title:"",
     			toThousand
	    	})
    	},

	// Detail - Detail from one product PASO 2. DEFINIMOS LOS PARAMETROS 
	detail: (req, res) => {
		let productId = +req.params.id; //id parametro
        let product = products.find(product => product.id === productId)

		res.render('detail', {
			product,
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