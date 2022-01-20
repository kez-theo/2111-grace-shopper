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



module.exports = router;
