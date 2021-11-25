var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/login', usersController.login);//metodo que devuelve la vista
router.get('/register', usersController.register);

module.exports = router;
