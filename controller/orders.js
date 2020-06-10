const models = require('../models')
const jwt = require('../helpers/jwt')

module.exports = {
    get_orders: async (req, res) => {
        let orders = await models.Order.findAll({include: [
                {
                    model: models.OrderStatus
                },
                {
                    model: models.Customer,
                    include: [{
                        model: models.UserType
                    }]
                },
                {
                    model: models.Product
                }
            ]})
        if(orders.length === 0) {
            return res.status(404).json({
                Error: 'Pas de commandes trouvées'
            })
        }
        return res.status(200).json(orders)
    },
    post_order: async (req, res) => {
        if(req.body.quantity === undefined || req.body.id_customer === undefined ||
            req.body.id_product === undefined) {
            return res.status(412).json({
                Error: 'Paramètres manquants'
            })
        }
        let newOrder = await models.Order.create({
            quantity: req.body.quantity,
            id_customer: req.body.id_customer,
            id_product: req.body.id_product,
            date: new Date().toISOString().slice(0, 10)
        })
        return res.status(200).json({
            Message: 'Commande créée',
            Order: newOrder
        })
    },
    get_order: async (req, res) => {
        let user = await jwt.getUserFromJWT(req, res)
        if(user.statusCode === 200) {
            let userId = user.body.id
            let orders = await models.Order.findAll({where: {id_customer: userId}, include: [
                    {
                        model: models.OrderStatus
                    },
                    {
                        model: models.Product
                    }
                ]})
            if(orders.length === 0) {
                return res.status(404).json({
                    Error: 'Pas de commandes trouvées pour ce client'
                })
            }
            return res.status(200).json(orders)
        }
        else {
            return res.status(user.statusCode).json(user.body)
        }
    },
    put_order: async(req, res) => {
        let user = await jwt.getUserFromJWT(req, res)
        if(user.statusCode !== 200) {
            return res.status(user.statusCode).json(user.body)
        }
        if(user.body.id_usertype !== 1) {
            return res.status(503).json({
                Error: 'Vous n\'avez pas l\'autorisation de modifier cette ressource'
            })
        }
        let order = req.body.order
        if(order === undefined) {
            return res.status(412).json({
                Error: 'Données manquantes'
            })
        }
        let response = await models.Order.update(order, {where: {id: order.id}})
        return res.status(200).json(response)
    }
}