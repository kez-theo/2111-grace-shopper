import axios from "axios";

//ACTIONS
const LOAD_CART = "LOAD_CART";
const UPDATE_CART = "UPDATE_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
// EMPTY CART each time user checks out
const EMPTY_CART = "EMPTY_CART";

//ACTION CREATORS
const fetchCart = (cart) => ({ type: LOAD_CART, cart });
const updateCart = (cart) =>({ type: UPDATE_CART, cart})
const removeItem = (book)=> ({ type: REMOVE_ITEM, book});
const emptyCart = () => ({ type: EMPTY_CART });

//THUNKS
export const fetchCartThunk = () => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`/api/cart/`);
    if (data) {
      dispatch(fetchCart(data));
    } else if (status === 404) {
      throw new Error("cart empty");
    } else {
      throw new Error("error fetching cart");
    }
  } catch (err) {
    console.error(err);
  }
};


// funk for adding book to NEW cart
export const addItemThunk = (item) => async (dispatch) => {
  try {
    const { data, status } = await axios.post("/api/cart", item);
    if (status === 200) {
      dispatch(updateCart(data));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to add item");
    }
  } catch (error) {
    console.error(error);
  }
};

// funk for deleting book
export const removeItemThunk = (bookId) => async (dispatch) => {
  try {
    const { status } = await axios.delete(`/api/cart/${bookId}`);

    if (status === 200) {
      dispatch(removeItem(bookId));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to remove item");
    }
  } catch (err) {
    console.error(err);
  }
};

//Initial state:
const initialState = []

//REDUCER
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return action.cart;
    case UPDATE_CART:{
      return [...state, action.cart]
    } 
    case REMOVE_ITEM:{
      const newState = state.filter(
        cartBook => cartBook.bookId !== action.bookId
      )
      return newState
    }
    case EMPTY_CART:
      return initialState;
    default:
      return state;
  }
}
