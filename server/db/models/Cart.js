const { Sequelize, DataTypes } = require('sequelize')
const Book = require('./book.js')
const db = require('../db')

const Cart = db.define('cart', {
    //cart state:
    cart_quantity:{
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0
        }
    },

    //ordering:
    order_ID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        validate: {
          notEmpty: true
        }
    },
    order_status: {
        type: Sequelize.ENUM('in cart', 'ordered'),
        defaultValue: 'in cart',
        validate: {
          notEmpty: true
        }
      },
    order_date:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

    //Check out/payment:
    checkout_price: Sequelize.DECIMAL(10, 2),
    payment_CreditCardNum: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCreditCard: true
      }
    },
    payment_CreditCardCCV: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: true,
        len: [3]
        
      },
    },
    payment_CreditCardEXP: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true
      },
    },
    billingAddress: Sequelize.STRING,
    shippingAddress: Sequelize.STRING,
    
})

//Individual carts

//get or create new cart:
Cart.prototype.findOrCreateCart = async function(username, ){
  
} 

//update cart quantity:
Cart.prototype.updateQuantity = async function(){

}

//get total price:
Cart.prototype.getPrice = async function(){

}

//get all order info (for checkout/ reviewing cart/ reviewing past orders)
Cart.prototype.getOrderInfo = async function(){

}

//place order/check out:
Cart.prototype.checkout = async function(){
  //will end in changing the ENUM:
  await this.update({
    order_status: 'ordered'
  })
}

module.exports = Cart


//Cart:
//belongsTo User
//hasMany Book
