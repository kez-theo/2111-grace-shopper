import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockItem } from "../store/stockItem";

const StockItem = () => {
  const dispatch = useDispatch();

  // nit: if you're going to destructure, why return an object?
  // const book = useSelector(state => state.stockItemReducer)
  const { book } = useSelector((state) => {
    return {
      book: state.stockItemReducer,
    };
  });

  useEffect(() => {
    dispatch(fetchStockItem(book.id));
  }, []);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <img src={book.coverimg} style={{ width: "220px", height: "350px" }} />
      <p> Description: {book.description}</p>
      <h4>${book.price ? book.price / 100 : 5}</h4>
      <button>Update Item</button>
    </div>
  );
};
export default StockItem;
