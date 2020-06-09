const router = require('express').Router()

let ordersController = require('../controller/orders')

router.get('/', ordersController.get_orders)
router.post('/', ordersController.post_order)
router.get('/:customerid', ordersController.get_order)

module.exports = router