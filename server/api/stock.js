const router = require("express").Router();
const { models: { Book } } = require("../db");
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");
module.exports = router;

//admin book routes

//get all books
router.get("/stock", requireToken, isAdmin, async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

//route to single book
router.get('/stock/:bookId', requireToken, isAdmin, async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    res.json(book);
  } catch (err) {
    next(err);
  }
})