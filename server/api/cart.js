const router = require("express").Router();
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");
const {
  models: { Cart, User, Book },
} = require("../db");

// find user cart:
// >>>>>>> ATTEMPT 1 -> cart/cartId
router.get("/:cartId", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    if (user) {
      const currentCart = await Cart.find({
        where: {
          id: req.params.cartId,
          userId: user.id,
          order_status: "in cart",
        },
        include: { model: Book },
      });
      if (currentCart) {
        res.json(currentCart);
      } else {
        console.log('no cart - get shopping!')
        throw new Error();
      }
    } else {
      console.log('Not your books!!!')
      throw new Error();
    }
  } catch (err) {
    console.log('>>>>>>>You are not Authorized!')
    next(err);
  }
});

// // find user cart:
// >>>>>ATTEMPT 2
// router.get("/:userId/:cartId", requireToken, async (req, res, next) => {
//   try {
//     const currentCart = await Cart.findOne({
//       where: {
//         userId: req.params.id,
//         order_status: "in cart",
//       },
//       include: { model: Book },
//     });
//     if (currentCart) {
//       res.json(currentCart);
//     } else {
//       throw new Error();
//     }
//   } catch (err) {
//     next(err);
//   }
// });

// add item to cart:
// router.post(':/userId/add', async (req, res, next) => {
//   try {
//     const [currentOrder] = await Cart.findOrCreate({
//       where: {
//         order_status: 'in cart',
//         userId: req.body.userId
//       },
//       include: {
//         model: Book
//       },
//     const currentBook = await Book.findByPk(req.body.bookId),
//     let updatedOrder = await Cart.findOne({
//         where: {
//           userId: req.body.userId,
//           order_status: 'in cart'
//         },
//         include: {model: Book}
//       })
//         res.json(updatedOrder)
//   }} catch (error) {
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
