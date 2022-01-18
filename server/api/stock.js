const router = require("express").Router();
const {
  models: { Book },
} = require("../db");
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");
module.exports = router;

//admin book routes

//get all books
// curious why not just reuse the book routes?
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

//route to single book
router.get("/:stockId", requireToken, isAdmin, async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.stockId);
    res.json(book);
  } catch (err) {
    next(err);
  }
});

// //route to edit book
// router.put('/:stockId', requireToken, isAdmin, async(req, res, next) => {
//   try {
//     const book = await Book.findByPk(req.params.bookId)
//     res.json(book);
//   } catch (err) {
//     next(err);
//   }
// })

// //route to delete book
// router.delete('/', requireToken, isAdmin, async(req, res, next) => {
//   try {
//     const book = await Book.findByPk(req.params.bookId)
//     res.json(book);
//   } catch (err) {
//     next(err);
//   }
// })
