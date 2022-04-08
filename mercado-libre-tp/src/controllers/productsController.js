const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');// RESUMEN DE LA RUTA
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//lee json y lo pasa a javascrip base de datos parceada
const writeJSON = (dataBase) => {
	fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(dataBase), "utf-8")
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
	// Root - Show all products
        	index: (req, res) => {
let productos = products.filter(product => product) 
		
	     res.render('products', {
		 productos,
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
			products,
			toThousand,
			title:""

		})
	},
   // ruta http://localhost:3005/products/create
	// /create - Form to create
	create: (req, res) => {

		res.render('product-create-form',{
			title:""
		})
	},
	
     // Create -  Method to store redireccioa a la pagina de productos
	 store: (req, res) => {
	   const { name, price, discount, category, description } = req.body

	   let lastId = 1;

	   products.forEach(product => {
		   if(product.id > lastId){
			   lastId = product.id
		   }
	   })

	   let newProduct = {
		   id: lastId + 1,
		   name,
		   price: +price,
		   discount: +discount,
		   category,
		   description,
		   image: "default-image.png"
	   }

	   products.push(newProduct)

	   writeJSON(products)

	   res.redirect('/products')

    },
	edit: (req, res) => {

		let productId = +req.params.id;
		let productToEdit = products.find(product => product.id === productId);

		res.render('product-edit-form', {
			product: productToEdit,
			title:""
		})
	},
	// Update - Method to update
	update: (req, res) => {
		let productId = +req.params.id;
		const { name, price, discount, category, description } = req.body
        
		products.forEach(product => {
			if(product.id === productId){

                product.id === product.id,
			    product.name = name,
			    product.price = price,
			    product.discount = discount,
			    product.category = category,
			    product.description = description,
			    product.image = product.image
			}
		}) 
		
		writeJSON(products)

		res.redirect(`/products/detail/${productId}`)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productId = +req.params.id;

		products.forEach(product => {
			if(product.id === productId) {
				let productToDestroy = products.indexOf(product)
				productToDestroy !== -1 ? 
				products.splice(productToDestroy, 1) : 
				console.log('No encontre el producto')
			}
		})

		writeJSON(products)

		res.redirect('/products')
	}		


}

module.exports = productsController;