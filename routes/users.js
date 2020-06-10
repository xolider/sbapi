const router = require('express').Router()

let usersController = require('../controller/users')

router.post('/login', usersController.post_login)
router.get('/me', usersController.get_me)

module.exports = router