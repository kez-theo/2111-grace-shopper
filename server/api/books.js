const router = require("express").Router();
const {
  models: { Book },
} = require("../db");
module.exports = router;

//get all books
router.get("/", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

<<<<<<< HEAD
//admin book routes
router.get("/stock", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});
=======
//route to single book
router.get('/:bookId', async(req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    res.json(book);
  } catch (err) {
    next(err);
  }
})
>>>>>>> e54ce5bdaf51ec6d07c6076a83cb171ed8bba771
