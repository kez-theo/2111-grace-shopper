//note: look at todos and todo in PairExercise.TodoList.V2 for a good example of how to pass an id prop to each single book
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchStock, updateStock, removeStock } from "../store/stock";

const Stock = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { books } = useSelector((state) => {
    return {
      books: state.stockReducer,
    };
  });

  useEffect(() => {
    dispatch(fetchStock());
  }, []);

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
          {/* These are 'magic numbers'.
          What do they mean? If something changes in the future,
          is this guaranteed to work? */}
          {books.slice(0, 21).map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                {/* nit: This should be a utility method */}
                <td>${(book.price / 100).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => {
                      console.log("hello");
                      history.push(`/stock/${book.id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => removeStock(book.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
