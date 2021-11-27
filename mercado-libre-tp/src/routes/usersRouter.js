/* paso 3: creamos las rutas */
var express = require('express');// copiar lo mismo sin modificar
var router = express.Router(); // ""

let usersController = require('../controllers/usersController') //modificar el nombre del archivo + el nombre de la variable

/* GET users listing.definimos las dos vistas*/
router.get('/login', usersController.login);//definimos el nombre de las rutas + variable que queremos requerir
router.get('/register', usersController.register);// del controlador + el archivo-ejs

module.exports = router;
