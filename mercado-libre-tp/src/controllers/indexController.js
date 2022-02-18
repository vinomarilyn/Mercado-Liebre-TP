const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');// RESUMEN DE LA RUTA
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//lee json y lo pasa a javascrip base de datos parceada

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

  index: (req, res )=> {
    let productsInSale = products.filter(product => product.category === "in-sale") 
		let productsVisited = products.filter(product => product.category === "visited")

          res.render('home', {
                      productsInSale,
	                   	productsVisited,
                      products,
                      title:"",
	                		toThousand
                    })//render nos permite ver la pagina
      },
      
 };

module.exports = controller ;