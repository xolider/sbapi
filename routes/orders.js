const router = require('express').Router()

let ordersController = require('../controller/orders')

router.get('/', ordersController.get_orders)
router.post('/', ordersController.post_order)
router.get('/order', ordersController.get_order)
router.put('/order', ordersController.put_order)

module.exports = router