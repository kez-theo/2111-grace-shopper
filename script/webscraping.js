import got from "got";
import fs from "fs";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
const writeStream = fs.createWriteStream("books.csv");

writeStream.write(`imageUrl,Title,Author,price \n`);

// const port = process.env.PORT || 4000;
// const app = express();

//I'm trying to get the title, author, description, and imageURL

//writeStream.write(`author, title, imageLink, description \n)

got("https://bookshop.org/lists/juicy-thrillers")
  .then((html) => {
    const dom = new JSDOM(html.body);
    //grab each book
    let bookList = [
      ...dom.window.document.getElementsByClassName(
        "border-b-not-last border-border flex max-w-3xl mx-auto px-4 lg:px-0 py-8"
      ),
    ];

    bookList.forEach((book) => {
      const imageUrl = book.querySelector("img").currentSrc;
      const title = book.querySelector("h1").innerText;
      const author = book.querySelector("h3").innerText;
      const price = book.getElementsByClassName("font-sans-bold");
      writeStream.write(`${title}, ${author} \n`);
    });

    console.log("done writing file");
  })
  .catch((err) => {
    console.log(err);
  });
