//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/books";

const testBooks = [
  {
    title: "The Cat in The Hat",
    isbn: 100000000,
    author: "Dr. Seuss",
    price: 300,
  },
  {
    title: "Pride and Prejudice",
    isbn: 135000000,
    author: "Jane Austen",
    price: 1000,
  },
];

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => {
    return {
      books: state.booksReducer,
    };
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      {books.slice(0, 20).map((book) => {
        return (
          <div key={book.isbn}>
            <img className="book-cover all-books" src={book.coverimg} />
            <div>
              <h2>{book.title}</h2>
              <h3> by {book.author}</h3>
            </div>
            <div>${book.price / 100}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
