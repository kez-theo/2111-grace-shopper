import axios from 'axios'

//Action types:
const GET_CART = 'GET_CART';
// const CART_CHECKOUT = 'CART_CHECKOUT'


//Action Creators:
const getCart = cart => ({type: GET_CART, cart});
// const checkout = order_ID =>({
//   type: CART_CHECKOUT,
//   order_ID
// })


//THUNKS:
export const fetchCartThunk = () => async dispatch => {
    try {
      const res = await axios.get('/api/cart')
      dispatch(getCart(res.data))
    } catch (err) {
      console.error(err)
    }
  }
// export const checkoutCart = cart => async dispatch =>{
//   try{
//     const {data} = await axios.put('/api/cart', cart)
//     dispatch()
//   }
// }
//Initial State:
const defaultCart ={
    contents: []
}


//Reducer:
export default function(state = defaultCart, action){
    switch (action.type) {
        case GET_CART:
          return action.cart
    default: return state
    }
}
