import React from 'react';
import {connect} from 'react-redux';
import { loadCart } from "../store/cart";

export class Cart extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     contents: {}
  //   }

  //   this.removeItem = this.removeItem.bind(this)
  //   this.updateItem = this.updateItem.bind(this)
  // }

  componentDidMount() {
    const cartId = this.props.match.params.cartId
    this.props.loadCart(cartId)
  }

  // removeItem(BookName) {
  //   removeGuestCartItem(BookName)
  //   const BookObj = JSON.parse(localStorage.getItem('cart'))
  //   this.setState({
  //     contents: BookObj
  //   })
  // }

  render() {
    // const cartArr = Object.values(cart)
    return (
      <>
        <div>
          <h3>${username}'s Cart</h3>
        </div>
        <div>
          <h3>Book 1</h3>
          <h3>Book 2</h3>
          <h3>Book 3</h3>
        </div>
      </>
    )
  }
}
  
  export default Cart;