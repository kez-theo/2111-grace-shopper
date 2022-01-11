const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    orderId:{
        type: Sequelize.INTEGER
    },
    orderSubmit: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
    }
})

module.exports = Cart

//route

//Cart:
//belongsTo User
//hasMany Books 

//Payment:
//hasOne Cart