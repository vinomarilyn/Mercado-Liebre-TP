// ************ Require's ************
var express = require('express');
var router = express.Router();

// ************ Controller Require ************
var productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
//router.post('/create', productsController.store); 


/***GET ONE PRODUCT detalles de PRODUCTO :ID ***/ 
router.get('/detail/:id/', productsController.detail); /**PASO 1: DEFINIMOS LA RUTA */

/*** EDIT ONE PRODUCT ***/ 
router.get('/detail/:id/edit', productsController.edit); 
//router.put('/detail/:id', productsController.update);


/*** DELETE ONE PRODUCT***/ 
//router.delete('/detail/:id', productsController.destroy); 


module.exports = router;
