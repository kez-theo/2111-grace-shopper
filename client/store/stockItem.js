import axios from "axios";

const TOKEN = "token";

//ACTIONS
const GET_STOCK_ITEM = "GET_STOCK_ITEM";
const EDIT_STOCK = "EDIT_STOCK";

//ACTION CREATORS
export const getStockItem = (stockItem) => ({
  type: GET_STOCK_ITEM,
  stockItem,
});

export const editStock = (stockItem) => ({
  type: EDIT_STOCK,
  stockItem,
});

//THUNK CREATORS

export const fetchStockItem = (stockId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      if (token) {
        const { data: stockItem } = await axios.get(`/api/stock/${stockId}`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(getStockItem(stockItem));
      }
    } catch (err) {
        console.log(err, '>>>>>>>>fetchStockItem Thunk Error!!!');
    }
  };
};

export const updateStock = (stockItem, history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      if (token) {
        const { data: updatedItem } = await axios.put(`/api/stock/${stockItem.id}`, stockItem, {
            headers: {
              authorization: token,
            },
          });
        console.log(updatedItem)
        dispatch(editStock(updatedItem));
      }
      history.push(`/stock`)
    } catch (err) {
      console.log(">>>>>>>>>>thunk not working!!")
      console.log(err);
    }
  };
};

//REDUCER
const initialState = {};

export default function stockItemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STOCK_ITEM:
      return action.stockItem;
    case EDIT_STOCK:
      return [...state, action.stockItem];
    default:
      return state;
  }
}
