import axios from "axios";

//ACTIONS
const SET_BOOKS = "SET_BOOKS";

//ACTION CREATORS
export const setBooks = (books) => ({
  type: SET_BOOKS,
  books,
});

//THUNK CREATORS

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/books");
    } catch (err) {
      console.log(err);
    }
  };
};

//REDUCER
const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.books;

    default:
      return state;
  }
}
