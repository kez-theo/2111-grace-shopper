giconst router = require("express").Router();
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
