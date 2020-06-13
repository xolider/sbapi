const router = require('express').Router()
const productsController = require('../controller/products')

router.get('/', productsController.get_products)
router.put('/:id', productsController.put_product)
router.post('/', productsController.post_product)

module.exports = router