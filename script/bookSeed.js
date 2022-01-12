const fs = require("fs");
const pkg = require("pg");
const { Pool } = pkg;
const fastcsv = require("fast-csv");
// const bookCSV = require("./book_data_selection.csv");

let stream = fs.createReadStream(
  "/Users/chinahoffman/src/Fullstack/2111-grace-shopper/script/book_data_selection.csv"
);
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function (data) {
    console.log("first step");
    csvData.push(data);
  })
  .on("end", function () {
    console.log("second step");
    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const pool = new Pool({
      host: "localhost",
      user: "chinahoffman",
      database: "book_shopper",
      password: "postgres",
      port: 5432,
    });

    const query =
      "INSERT INTO books (title, series, author, description, language, isbn, genres, bookformat, pages, publisher, coverimg, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";

    pool.connect((err, client, done) => {
      if (err) throw err;

      try {
        console.log("last step");
        csvData.forEach((row) => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        done();
      }
    });
  });

stream.pipe(csvStream);
