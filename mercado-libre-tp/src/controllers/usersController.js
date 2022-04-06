const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');// RESUMEN DE LA RUTA
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));//lee json y lo pasa a javascrip base de datos parceada


const usersController = {

  login: (req, res )=> {
  /*   let productsInSale = products.filter(product => product.category === "in-sale") 
		let productsVisited = products.filter(product => product.category === "visited")

      */res.render('login', {
                      products,
                      title:""
                    })//render nos permite ver la pagina
      },
      
   register: (req, res  )=> {
        res.render('register', {
          products,
          title:""
        });//render nos permite ver la pagina
    },
 };

module.exports = usersController ;