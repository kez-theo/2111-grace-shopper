const router = require("express").Router();
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");
const {
  models: { Cart, User, Book },
} = require("../db");

// find user cart:
router.get("/", requireToken, async (req, res, next) => {
  try {
    const currentCart = await Cart.findOne({
      where: {
        userId: req.user.id,
        order_status: "in cart",
      },
      attributes: ["id"],
      include: [
        {
          model: Book,
          attributes: ["id", "title", "author", "coverimg", "price"],
          through: { attributes: [] },
          required: true,
        },
      ],
    });
    console.log({ currentCart });
    if (currentCart) {
      res.json(currentCart);
    } else {
      console.log("no cart - get shopping!");
      throw new Error();
    }
  } catch (err) {
    console.log(">>>>>>>You are not Authorized!");
    next(err);
  }
});

// add item to cart:
// 401 Unauthorized response status code indicates that the 
// client request has not been completed because it lacks valid 
// authentication credentials for the requested resource.
router.post("/", requireToken, async (req, res, next) => {
  try {
    const currentOrder = await Cart.findOrCreate({
      where: {
        order_status: 'in cart',
        userId: req.user.id,
      }})
      const currBook = await Book.findByPk(req.body.id)
      await currentOrder.addBook(currBook)
      res.json(currBook)
} catch (error) {
    next(error)
  }
})



// Routes
// router.get('/', async (req, res, next) => {
//   try {
//     const cart = await findCart(req.user.id)
//     let cartId;
//     //EMPTY CART creates a new cart
//     if (!cart.length) {
//       const newCart = await Cart.create({userId: req.user.id})
//       res.status(201).json(newCart)
//       cartId = newCart.cartIdId

//       //NOT empty cart:
//     } else if (cart.length) {
//       cartId = cart[0].dataValues.id
//     }

//     const products = await OrderProducts.findAll({
//       where: {
//         orderId: orderId
//       },
//       include: [Product]
//     })
//     res.json(products)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const cart = await findCart(req.user.id)

//     const newCartProduct = OrderProducts.create({
//       orderId: cart[0].dataValues.id,
//       productId: req.body.id
//     })
//     res.status(201).json(newCartProduct)
//   } catch (error) {
//     next(error)
//   }
// })

// // find user cart:
// // router.get('/:userId', async (req, res, next) => {
// //   try {
// //     const currentCart = await Cart.findOne({
// //       where: {
// //         userId: req.params.userId,
// //         order_status: 'in cart'
// //       },
// //       include: {model: Book, as: BooksInOrder}
// //     })
// //     if (currentCart) {
// //       res.json(currentCart)
// //     } else {
// //       throw new Error()
// //     }
// //   } catch (err) {
// //     next(err)
// //   }
// // })




// // // remove item from cart
// // router.put('/remove', async (req, res, next) => {
// //   try {
// //     const currentOrder = await Cart.findByPk(req.body.id)
// //     if (currentOrder.username !== req.body.username) {
// //       res.sendStatus(401)
// //     } else {
// //       await BookInOrder.destroy({
// //         where: {
// //           bookId: req.body.bookId,
// //           cartId: req.body.cartId
// //         }
// //       })
// //     }
// //     res.sendStatus(200)
// //   } catch (err) {
// //     next(err)
// //   }
// // })



module.exports = router;
