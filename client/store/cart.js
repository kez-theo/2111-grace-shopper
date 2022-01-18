import axios from "axios";

//ACTIONS
const LOAD_CART = "LOAD_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const CART_QUANTITY = "CART_QUANTITY";
const EMPTY_CART = "EMPTY_CART";
//^^ switch to just local

//ACTION CREATORS
const gotCart = (cart) => ({ type: LOAD_CART, cart });
const removeItem = (bookId) => ({ type: REMOVE_ITEM, bookId });
const cartQuantity = (updates) => ({
  type: CART_QUANTITY,
  productId: updates.productId,
  quantity: updates.quantity,
});
const emptyCart = () => ({ type: EMPTY_CART });

//THUNKS
// This is kinda on the right track.
// But instead of throwing errors or ALERTING!
// This thunk should dispatch ACTIONS which trigger some reducer somewhere.
// If you run out of stock, dispatch an 'OUT OF STOCK' action which
// can be intercepted by an 'alert' component, for example.
// You can also dispatch ERROR actions and have a generic 'error message'
// component.
export const addItemThunk = (idObj) => async (dispatch) => {
  try {
    const { data, status } = await axios.put("/api/cart/add", idObj);
    if (data.alert) {
      //lol.
      alert("THAT'S ALL THE STOCK WE HAVE!");
    } else if (status === 200) {
      dispatch(gotCart(data));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      // might be valuable to log the status here?
      // not sure you need an if clause for every non-200 status.
      throw new Error("failed to add item");
    }
  } catch (error) {
    console.error(error);
  }
};

export const loadCart = (userId) => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`/api/cart/${userId}`);
    if (data) {
      dispatch(gotCart(data));
    } else if (status === 404) {
      throw new Error("cart empty");
    } else {
      throw new Error("error fetching cart");
    }
  } catch (err) {
    console.error(err);
  }
};

export const _removeItem = (idObj) => async (dispatch) => {
  try {
    const { status } = await axios.put(`/api/cart/remove`, idObj);

    if (status === 200) {
      dispatch(removeItem(idObj.productId));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to remove item");
    }
  } catch (err) {
    console.error(err);
  }
};

export const editQuantity = (updateObj) => async (dispatch) => {
  try {
    const { data, status } = await axios.put(`/api/cart/quantity`, updateObj);

    if (status === 200) {
      dispatch(cartQuantity(data));
    } else if (status === 401) {
      throw new Error("Warning: attempt to edit another user's cart");
    } else {
      throw new Error("failed to edit item quantity");
    }
  } catch (err) {
    console.error(err);
  }
};

//REDUCER
export default function cartReducer(state = defaultCartState, action) {
  switch (action.type) {
    case LOAD_CART:
      return action.cart;
    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId
        ),
      };

    case EMPTY_CART:
      return defaultCartState;
    default:
      return state;
  }
}
