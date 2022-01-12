// store all of our functions that act as middleware between our requests and responses
const { models: { User } } = require('../db')

const requireToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const user = await User.findByToken(token)
        req.user = user
    } catch (e) {
      next (e)  
    }
}

module.exports = {
    requireToken
}