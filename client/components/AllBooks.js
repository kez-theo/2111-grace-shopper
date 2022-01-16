//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/books";

const Books = () => {
  //gives access to dispatch thunks directly
  const dispatch = useDispatch();
  //gives access to redux state
  const { books } = useSelector((state) => {
    return {
      books: state.booksReducer,
    };
  });

  //where you preform side effects, including data fetching, manually changing the DOM, using history (also available as a hook). Basically componentDidMount, componentDidUpdate and componentWillUnmount combined.
  useEffect(() => {
    dispatch(fetchBooks());
    //this empty bracket determines that whatever is in the useEffect body will be called once, making this a replacement for componentDidMount.
  }, []);

  return (
    <div className="book-small">
      {books.slice(0, 21).map((book) => {
        return (
<<<<<<< HEAD
            <div className="book-info" key={book.id}>
          <Link to = {`/books/${book.id}`}>
            <img className="book-cover all-books" src={book.coverimg} />
          </Link>
=======
          <div className="book-info" key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img className="book-cover all-books" src={book.coverimg} />
            </Link>
>>>>>>> 628d3f0545b83301123da94819473f4bafa1d644
          </div>
        );
      })}
    </div>
  );
};

export default Books;
