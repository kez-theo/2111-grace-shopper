const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
    //cart state:
    cart_quantity:{
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
    },

    //ordering:
    order_ID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    order_status: {
        type: Sequelize.ENUM('in cart', 'ordered'),
        defaultValue: 'in cart'
      },
    order_date:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

    //Check out/payment:
    checkout_price: Sequelize.DECIMAL(10, 2),
    payment_CreditCardNum: Sequelize.BIGINT,
    payment_CreditCardCCV: Sequelize.INTEGER,
    payment_CreditCardEXP: Sequelize.DATE,
    billingAddress: Sequelize.STRING,
    shippingAddress: Sequelize.STRING,
    
})

module.exports = Cart


//Cart:
//belongsTo User
//hasMany Books 

//Payment:
//hasOne Cart