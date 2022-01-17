const router = require('express').Router()
const { models: { Cart, User, Book,}} = require('../db')


// helper functions
const findCart = userId =>
  Cart.findAll({
    where: {
      userId,
      order_status: 'in cart'
    }
  })
const findCartItem = (cartId) =>
  Book.findAll({
    where: {
      cartId
    }
  })

// Routes
router.get('/', async (req, res, next) => {
  try {
    const cart = await findCart(req.user.id)
    let cartId;
    //EMPTY CART creates a new cart
    if (!cart.length) {
      const newCart = await Cart.create({userId: req.user.id})
      res.status(201).json(newCart)
      cartId = newCart.cartIdId

      //NOT empty cart:
    } else if (cart.length) {
      cartId = cart[0].dataValues.id
    }

    const products = await OrderProducts.findAll({
      where: {
        orderId: orderId
      },
      include: [Product]
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const cart = await findCart(req.user.id)

    const newCartProduct = OrderProducts.create({
      orderId: cart[0].dataValues.id,
      productId: req.body.id
    })
    res.status(201).json(newCartProduct)
  } catch (error) {
    next(error)
  }
})

// find user cart:
// router.get('/:userId', async (req, res, next) => {
//   try {
//     const currentCart = await Cart.findOne({
//       where: {
//         userId: req.params.userId,
//         order_status: 'in cart'
//       },
//       include: {model: Book, as: BooksInOrder}
//     })
//     if (currentCart) {
//       res.json(currentCart)
//     } else {
//       throw new Error()
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// // add item to cart:
// router.put('/add', async (req, res, next) => {
//   try {
//     const [currentOrder] = await Cart.findOrCreate({
//       where: {
//         order_status: 'in cart',
//         userId: req.body.userId
//       },
//       include: {
//         model: Book,
//         as: BooksInOrder
//       }),
// } catch (error) {
//     next(error)
//   }
// })


// // remove item from cart
// router.put('/remove', async (req, res, next) => {
//   try {
//     const currentOrder = await Cart.findByPk(req.body.id)
//     if (currentOrder.username !== req.body.username) {
//       res.sendStatus(401)
//     } else {
//       await BookInOrder.destroy({
//         where: {
//           bookId: req.body.bookId,
//           cartId: req.body.cartId
//         }
//       })
//     }
//     res.sendStatus(200)
//   } catch (err) {
//     next(err)
//   }
// })



// //update cart:
// router.put(':id', async (req, res, next) => {
//     try {
//       const updatingCart = await Cart.findByPk(req.params.id)
//       res.send(await updatingCart.update(req.body))
//     } catch (error) {
//       next(error)
//     }
//   })


module.exports = router;
