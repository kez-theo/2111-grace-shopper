const router = require('express').Router()
const { models: { User }} = require('../db')
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')
module.exports = router

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    //if we managed to make it PAST require token, we can guarantee that we have a user!
    //isAdmin lets us check to see if that user is an Admin
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
