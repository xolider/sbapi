const models = require('../models')
const jwt = require('../helpers/jwt')

module.exports = {
    get_products: async (req, res) => {
        let products = await models.Product.findAll()
        if(products.length === 0) {
            return res.status(404).json({
                Error: 'Pas de produits trouvés'
            })
        }
        return res.status(200).json(products)
    },
    put_product: async (req, res) => {
        let user = await jwt.getUserFromJWT(req, res)
        if(user.statusCode !== 200) {
            return res.status(user.statusCode).json(user.body)
        }
        if(user.body.id_usertype !== 1) {
            return res.status(503).json({
                Error: 'Vous n\'avez pas l\'autoroisation de modifier cette ressource'
            })
        }
        let product = req.body.product
        if(product === undefined) {
            return res.status(412).json({
                Error: 'Données manquantes'
            })
        }
        let response = await models.Product.update(product, {where: {id: req.params.id}})
        return res.status(200).json(response)
    },
    post_product: async (req, res) => {
        let user = await jwt.getUserFromJWT(req, res)
        if(user.statusCode !== 200) {
            return res.status(user.statusCode).json(user.body)
        }
        if(user.body.id_usertype !== 1) {
            return res.status(503).json({
                Error: 'Vous n\'avez pas l\'autorisation d\'ajouter cette ressource'
            })
        }
        let product = req.body.product
        if(product === undefined) {
            return res.status(412).json({
                Error: 'Données manquantes'
            })
        }
        let response = await models.Product.create(product)
        return res.status(200).json(response)
    }
}