import axios from "axios";

//ACTIONS
const GET_STOCK = "GET_STOCK";
const EDIT_STOCK = "EDIT_STOCK";
const DELETE_STOCK = "DELETE_STOCK";

//ACTION CREATORS
export const getStock = (stock) => ({
  type: GET_STOCK,
  stock,
});

export const editStock = (stockItem) => ({
  type: EDIT_STOCK,
  stockItem,
});

export const deleteStock = (stockItem) => ({
  type: DELETE_STOCK,
  stockItem,
});


//THUNK CREATORS

export const fetchStock = () => {
  return async (dispatch) => {
    try {
      const { data: stock } = await axios.get("/api/books");
      dispatch(getStock(stock));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateStock = (stockItem, history) => {
  return async (dispatch) => {
    try {
      const { data: updatedItem } = await axios.put(`/api/books/${book.id}`, stockItem);
      dispatch(editStock(updatedItem));
      history.push(`/books`)
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeStock = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: stockItem } = await axios.delete(`/api/books/${id}`);
      dispatch(deleteStock(stockItem));
      const { data: stock } = await axios.get('/api/campuses')
      dispatch(getStock(stock))
      history.push(`/books`)
    } catch (err) {
      console.log(err);
    }
  };
};

//REDUCER
const initialState = [];

export default function stockReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STOCK:
      return action.stock;
    case EDIT_STOCK:
      return [...state, action.stockItem];
    case DELETE_STOCK:
      return state.filter((stockItem) => stockItem.id !== action.stockItem.id);
    default:
      return state;
  }
}
