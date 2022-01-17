import React from 'react';
import {removeGuestCartItem} from '../store/localcart'

export class LocalCart extends React.Component{
  constructor() {
    super()
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     contents: {}
  //   }

  //   this.removeItem = this.removeItem.bind(this)
  //   this.updateItem = this.updateItem.bind(this)
  // }

  // componentDidMount() {
  //   const BookObj = JSON.parse(localStorage.getItem('cart'))
  //   this.setState({
  //     contents: BookObj
  //   })
  // }

  // removeItem(bookId) {
  //   removeGuestCartItem(bookId)
  //   const BookObj = JSON.parse(localStorage.getItem('cart'))
  //   this.setState({
  //     contents: BookObj
  //   })
  // }

  render() {
    // const cart = this.state.items || []
    // const cartArr = Object.values(cart)
    
    return (
      <div>
        <h3>Guest's Cart</h3>
        <div>
              {cart
                ? cart.map(cartItem => (
                    <Cart
                      key={}
                      cartItem={}
                      loadCart={this.props.loadCart}
                    />
                  ))
                : `Your cart is currently empty`}
            </div>
      </div>
    )
  }
}
  
  export default LocalCart;