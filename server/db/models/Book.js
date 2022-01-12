const Sequelize = require("sequelize");
const db = require("../db");

module.exports = Book;

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  series: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  language: {
    type: Sequelize.STRING,
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [10, 13],
    },
  },
  genres: {
    type: Sequelize.ARRAY,
  },
  bookFormat: {
    type: Sequelize.STRING,
  },
  pages: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
  publisher: {
    type: Sequelize.STRING,
  },
  coverImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    defaultValue: 5.0,
  },
});
