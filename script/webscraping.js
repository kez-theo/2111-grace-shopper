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

    let imageSource = bookList.forEach((book) => {
      book.querySelector("img").currentSrc;

      let title = bookList.foreEach;

      writeStreamTitle.write(`${title}, ${author} \n`);
    });
    //grab imageUrl
    nodeList = [...dom.window.document.querySelectorAll("img")];
    nodeList.forEach((node, i) => {
      const imageUrl = node.attributes.src.value.toString();

      writeStreamUrl.write(`${imageUrl} \n`);
    });
    // grab description
    nodeList = [...dom.window.document.querySelectorAll("h2 ~ p:not(:empty)")];
    nodeList
      .filter((p) => !p.innerHTML.includes("<a"))
      .forEach((node, i) => {
        const description = node.innerHTML;

        writeStreamDescription.write(`${description} \n`);
      });
    console.log("done writing file");
  })
  .catch((err) => {
    console.log(err);
  });
