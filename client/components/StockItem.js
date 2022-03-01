import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockItem } from "../store/stockItem";

const StockItem = () => {
    const dispatch = useDispatch();
    const book = useSelector((state) => state.stockItemReducer)
    const { stockId } = useParams();
  
    useEffect(() => {
      dispatch(fetchStockItem(stockId));  
    }, []);

    return (
        <div>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <img src={book.coverimg} style={{ width: "220px", height: "350px" }} />
          <p> Description: {book.description}</p>
          <h4>${book.price ? (book.price/100).toFixed(2) : (5.00).toFixed(2)}</h4>
          <button>
            Update Item
          </button>
        </div>
    );
}
export default StockItem;
