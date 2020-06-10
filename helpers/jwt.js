const jwt = require('jsonwebtoken')
const env = require('dotenv').config()
const models = require('../models')

module.exports = {
    generateToken: async (user) => {
        return jwt.sign({
            id: user.id,
            name: user.name,
            mail: user.mail
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
    },
    getUserFromJWT: async (req, res) => {
        let token = req.headers['authorization']
        if(!token) {
            return {statusCode: 401, body: {Error: 'jeton d\'authentification manquant'}}
        }
        let jwtToken = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        if(jwtToken != null) {
            let userId = jwtToken.id
            let user = await models.Customer.findOne({where: {id: userId}})
            if(!user) {
                return {statusCode: 404, body: {Error: 'Utilisateur non trouvé'}}
            }
            else {
                return {statusCode: 200, body: user}
            }
        }
        return {statusCode: 401, body: {Error: 'Jeton d\'authentification invalide'}}
    }
}