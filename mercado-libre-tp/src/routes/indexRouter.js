let express = require('express')
let router = express.Router()

const indexController = require('../controllers/indexController')

router.get('/', indexController.index)
//router.???('/search', indexController.search); 

module.exports = router