import axios from "axios";

//ACTIONS
const LOAD_CART = "LOAD_CART";
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_ITEM = "REMOVE_ITEM";
const CART_COUNT_ADD = "CART_COUNT_ADD";
const CART_COUNT_SUBTRACT = "CART_COUNT_SUBTRACT";
// EMPTY CART each time user checks out
const EMPTY_CART = "EMPTY_CART";

//ACTION CREATORS
const fetchCart = (cart) => ({ type: LOAD_CART, cart });
const addItem = (newBook) => ({ type: ADD_TO_CART, newBook})
const removeItem = (deleteBook) => ({ type: REMOVE_ITEM, deletebook });
const cartPlus = (plus) => ({ type: CART_COUNT_ADD, plus})
const cartMinus = (minus) => ({ type: CART_COUNT_SUBTRACT, minus})
const emptyCart = () => ({ type: EMPTY_CART });

//THUNKS
export const fetchCartThunk = () => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`/api/cart`);
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

export const addItemThunk = (id) => async (dispatch) => {
  try {
    const { data, status } = await axios.post("/api/cart", id);
    if (status === 200) {
      dispatch(addItem(data));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to add item");
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeItemThunk = (id) => async (dispatch) => {
  try {
    const { status } = await axios.delete(`/api/cart/${id}`, );

    if (status === 200) {
      dispatch(removeItem(id));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to remove item");
    }
  } catch (err) {
    console.error(err);
  }
};

export const cartPlusThunk = add => async dispatch => {
  try {
    const {data} = await axios.put('/api/cart', add)
    dispatch(cartPlus(data))
  } catch (error) {
    console.error(error)
  }
}

export const cartMinusThunk = sub => async dispatch => {
  try {
    const {data} = await axios.put('/api/cart', sub)
    dispatch(cartMinus(data))
  } catch (error) {
    console.error(error)
  }
}

const emptyCartThunk =  (cart) => async (dispatch) =>{
  try {
  const { data, status } = await axios.delete(`/api/cart`, cart);
  if (data) {
    dispatch(emptyCart(data));
  }
} catch (err) {
  console.error(err);
}
}


//Initial state:
const initialState = []

//REDUCER
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return action.cart;
    case ADD_TO_CART:
      return [...state, action.addBook]
    case REMOVE_ITEM:{
      const newState = state.filter(
        cartBook => cartBook.bookId !== action.deleteBook
      )
      return newState
    }
    case CART_COUNT_ADD: {
      // state.forEach 'add'?
      return state
    }
    case CART_COUNT_SUBTRACT: {
      // state.forEach 'remove'?
      return state
    }
    case EMPTY_CART:
      return initialState;
    default:
      return state;
  }
}
