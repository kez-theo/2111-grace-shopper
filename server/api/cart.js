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
