//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/books";
//import Link from 'react-router-dom'

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
    <div className="book-small">
      {books.slice(0, 21).map((book) => {
        return (
          
            <div className="book-info" key={book.id}>
          <Link to = {`/books/${book.id}`}>
            <img className="book-cover all-books" src={book.coverimg} />
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
