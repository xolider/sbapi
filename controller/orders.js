const models = require('../models')

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
        let orders = await models.Order.findAll({where: {id_customer: req.params.customerid}, include: [
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
}