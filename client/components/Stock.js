//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchStock, updateStock, removeStock } from "../store/stock";

const Stock = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => {
    return {
      books: state.stockReducer,
    };
  });

  useEffect(() => {
    dispatch(fetchStock());
  }, []);
  console.log(books)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {books.slice(0, 21).map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>${book.price/100}</td>
                <td>buttons</td>
              </tr>
            );
          })}
        </tbody>
      </table>  
    </div>
  );
};

export default Stock;
