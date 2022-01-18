import React from 'react';
import {connect} from 'react-redux';
import { loadCart } from "../store/cart";

export class Cart extends React.Component {
  constructor (props) {
    super (props)
  }
  componentDidMount() {
    console.log(this.state)
    this.props.loadCart()
    console.log(this.props)
    console.log(this.state.cartReducer) 
  }

  // removeItem(BookName) {
  //   removeGuestCartItem(BookName)
  //   const BookObj = JSON.parse(localStorage.getItem('cart'))
  //   this.setState({
  //     contents: BookObj
  //   })
  // }

  render() {
    return (
      <>
        <div>
          <h3>Cody's Cart</h3>
        </div>
        <div>
          {/* create mapped books component
          that has:
          image,
          title,
          price */}
          <h3>Book 1</h3>
          <h3>Book 2</h3>
          <h3>Book 3</h3>
        </div>
      </>
    )
  }
}

const mapState = (state) => ({
  cart: state.cartReducer
})

const mapDispatch = (dispatch) => ({
  loadCart: (cartId) => dispatch(loadCart(cartId)),
})

export default connect(mapState, mapDispatch)(Cart);