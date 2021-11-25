/* paso 3: creamos las rutas */
var express = require('express');// copiar lo mismo sin modificar
var router = express.Router(); // ""

let usersController = require('../controllers/usersController') //modificar el nombre del archivo

/* GET users listing.definimos las dos vistas*/
router.get('/login', usersController.login);//metodo que devuelve la vista
router.get('/register', usersController.register);//ultimo paso que realice

module.exports = router;
