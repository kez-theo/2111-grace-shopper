import axios from 'axios'


//Actions
const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';
export const SET_PRODUCTS = 'SET_PRODUCTS'
const LOADING_PRODUCTS = 'LOADING_PRODUCTS';



//Action Creators
export const setSingleBook = (book) => {
    return {
        type: GET_SINGLE_BOOK,
        book
    }
}
const setProducts = (productList => ({
    type: SET_PRODUCTS,
    productList
  }))
  
const loadProduct = () => ({
    type: LOADING_PRODUCTS
  })

//Thunks
export const fetchSingleBook = (bookId) => {
    return async (dispatch) => {
        try {
            const { data:book } = await axios.get(`/api/books/${bookId}`)
            dispatch(setSingleBook(book))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchCartBooks = () => async dispatch => {
    try {
      dispatch(loadProduct())
      const res = await axios.get('/api/products/')
      dispatch(setProducts(res.data))
    } catch (err) {
      console.log(err)
    }
  }


export default function singleBookReducer (state = { cart: [] }, action){
    switch(action.type){
        case GET_SINGLE_BOOK:
            return action.book
        case SET_PRODUCTS:
            return {...state, cart: action.productList}
        case LOADING_PRODUCTS:
            return {...state}
        default:
            return state
    }
}