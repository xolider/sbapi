const router = require('express').Router()

let usersController = require('../controller/users')

router.post('/login', usersController.post_login)

module.exports = router