import axios from "axios";
//THUNKS

// nit: these thunks are named inconsistently.
// plus it's not really a thunk if it doesn't use dispatch
export const addItemThunk = async (bookId) => {
  try {
    // why would we need to fetch the book data?
    // shouldn't it already be in the redux store?
    const { data } = await axios.get(`/api/books/${bookId}`);
    if (localStorage.getItem("cart")) {
      const bookObj = JSON.parse(localStorage.getItem("cart"));
      const objToStr = JSON.stringify(bookObj);
      const item = {};
      item[data.title] = data;
      localStorage.setItem("cart", objToStr);
    }
    // ^ this if statement has no 'else' clause.
    // what do you want to do if it is false?
  } catch (err) {
    // note: it's not super useful to just catch an error
    // and log it to the console without giving the user
    // some indication of what happened.
    // For one, the error would be logged to the console anyway.
    // The other problem is now the app continues working, but
    // something went wrong here and there may be assumptions
    // elsewhere in the code that this succeeded. At least
    // if you avoid the try catch, the app truly breaks.
    // There are rare cases where what you do here makes sense,
    // but I don't think this is one of them.
    console.log(err);
  }
};

export const removeGuestCartItem = (book) => {
  try {
    const cartArr = JSON.parse(localStorage.getItem("cart"));
    delete cartArr[book];
    const objToStr = JSON.stringify(cartArr);
    localStorage.setItem("cart", objToStr);
  } catch (err) {
    console.log(err);
  }
};

export const updateGuestItemQuantity = (cart, newQuantity) => {
  try {
    const cartArr = JSON.parse(localStorage.getItem("cart"));
    cartArr[cart].quantity = newQuantity;
    const objToStr = JSON.stringify(cartArr);
    localStorage.setItem("cart", objToStr);
  } catch (err) {
    console.log(err);
  }
};
