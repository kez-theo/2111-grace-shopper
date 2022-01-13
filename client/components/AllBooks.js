//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Books = () => {
  const { books } = useSelector((state) => {
    return {
      books: state.books,
    };
  });

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.isbn}>
            <img src={book.coverImg} />
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
