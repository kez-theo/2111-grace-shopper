import axios from "axios";
import history from '../history'

const TOKEN = "token";

//ACTIONS
const FETCH_CART = "LOAD_CART";
const UPDATE_CART = "UPDATE_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
// EMPTY CART each time user checks out
const EMPTY_CART = "EMPTY_CART";

//ACTION CREATORS
const fetchCart = (cart) => ({ type: FETCH_CART, cart });
const updateCart = (cart) =>({ type: UPDATE_CART, cart})
const removeItem = (book)=> ({ type: REMOVE_ITEM, book});
const emptyCart = () => ({ type: EMPTY_CART });

//THUNKS

export const fetchCartThunk = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      if (token) {
        const { data: cart } = await axios.get(`/api/cart`, {
          headers: {
            authorization: token,
          },
        });
        dispatch(fetchCart(cart));
      }
    } catch (err) {
      console.log('>>>>>>thunk not working')
    }
  };
};

// funk for adding book to cart
export const addItemThunk = (item) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN)
      if (token) {
    const { data: cart } = await axios.post("/api/cart", item);

      dispatch(updateCart(cart));
      }
  } catch (error) {
    console.log(error);
  }
};

// funk for deleting book from cart
export const removeItemThunk = (bookId) => async(dispatch) => {
  try{
      await axios.delete(`/api/cart/${bookId}`)
      dispatch(removeItem(bookId))
  } catch(err){
    console.log('error removing book')
  }
}


// const initialState = {}

//Initial state:
const initialState = { cart: []} 

//REDUCER
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      return {...state, cart: action}
    case UPDATE_CART:{
      return {...state, cart: action.cart}
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
