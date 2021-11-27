let express = require('express')
let router = express.Router()

const indexController = require('../controllers/indexController')

router.get('/', indexController.index)

module.exports = router