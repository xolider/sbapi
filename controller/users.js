const bcrypt = require('bcryptjs')
const models = require('../models')
const jwt = require('../helpers/jwt')

module.exports = {
    post_login: async (req, res) => {
        if(req.body.mail === undefined || req.body.password === undefined) {
            return res.status(412).json({
                Error: 'Paramètres manquants (email ou mot de passe)'
            })
        }
        let userFound = await models.Customer.findOne({where: {mail: req.body.mail}})
        if(userFound === null) {
            return res.status(404).json({
                Error: 'Utilisateur non trouvé'
            })
        }
        let result = bcrypt.compareSync(req.body.password, userFound.password)
        if(!result) {
            return res.status(412).json({
                Error: 'Mot de passe invalide'
            })
        }
        let token = await jwt.generateToken(userFound)
        return res.status(200).json({
            token: token,
            user: userFound
        })
    }
}