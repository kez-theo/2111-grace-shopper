import axios from "axios";

const TOKEN = "token";

//ACTIONS
const GET_STOCK = "GET_STOCK";
const DELETE_STOCK = "DELETE_STOCK";

//ACTION CREATORS
export const getStock = (stock) => ({
  type: GET_STOCK,
  stock,
});

export const deleteStock = (stockItem) => ({
  type: DELETE_STOCK,
  stockItem,
});


//THUNK CREATORS

export const fetchStock = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    if (token) {
      const { data: stock } = await axios.get("/api/stock", {
        headers: {
          authorization: token,
        },
      });
      dispatch(getStock(stock));
    }
  };
};

export const removeStock = (id) => {
  return async (dispatch) => {
    try {
      console.log('delete thunk works')
      const { data: stockItem } = await axios.delete(`/api/stock/${id}`);
      console.log(stockItem)
      dispatch(deleteStock(stockItem));
      const { data: stock } = await axios.get('/api/books')
      dispatch(getStock(stock))
     // history.push(`/stock`)
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
    case DELETE_STOCK:
      return state.filter((stockItem) => stockItem.id !== action.stockItem.id);
    default:
      return state;
  }
}
