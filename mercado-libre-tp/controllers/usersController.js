/* paso 4: creamos los controladores para las dos vistas */
let usersController = {//objeto (nombre de la variable requerida en alchivo router)
           //funciones
   login: (req, res )=> { //funcion para que nos muestre el archivo-ejs
    res.render('login');//render nos permite ver la pagina
      },
   
    register: (req, res )=> {
         res.render('register');//render nos permite ver la pagina
     },
};

 module.exports = usersController;