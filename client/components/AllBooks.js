//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/books";

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
          <div key={book.id}>
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
