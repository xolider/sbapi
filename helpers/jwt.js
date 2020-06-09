const jwt = require('jsonwebtoken')
const env = require('dotenv').config()

module.exports = {
    generateToken: async (user) => {
        return jwt.sign({
            id: user.id,
            name: user.name,
            mail: user.mail
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
    }
}