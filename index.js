const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')

let host = "0.0.0.0"
let port = 8000

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).json({
        Message: 'Solidarity Bond API running successfully'
    })
})

app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)

app.use((req, res) => {
    let err = new Error('Not found')
    err.status = 404
    console.log(err.message)
    return res.status(err.status).json({
        Error: err.message
    })
})

app.listen(port, host, () => {
    console.log('Solidarity Bond API started at ' + host)
})