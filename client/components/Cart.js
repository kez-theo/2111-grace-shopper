import React from 'react'
import { fetchCartThunk, removeItemThunk } from '../store/cart'
import { cartPlusThunk, cartMinusThunk } from '../store/cart'
import { connect } from 'react-redux';

class Cart extends React.Component {
  async componentDidMount(){
    await this.props.loadCart()
  }
 

  render() {
    const cart = this.props.cart;
    // let cart
    // if (this.props.currentUser.id) {
    //   cart = this.props.cart
    // } else {
    //   let localCart = localStorage.getItem('CART')
    //   cart = JSON.parse(localCart)
    // }
    let total = 0;
    if (cart) {
      total = (
        cart.reduce(
          (acc, curr) =>
            acc + curr.book.price,
          0
        ) / 100
      ).toFixed(2)
      //The toFixed() method formats a number using fixed-point notation. 
      //ie: Number.parseFloat(123.4567).toFixed(2) = 123.46
    } else {
      total = 0
    }
    return (
      <div class="cart">
        <h3>My Cart</h3>
        {(!cart ? <span>You do not have any items in your cart.</span> :
        cart.map(book =>
          (
            <li key={this.props.book.id}>
              Title: {this.props.book.name} <br/>
              Price: {this.props.book.price}<br/>
            <button onClick={ () => this.props.deleteItem(cartId, bookId)}>Remove from Cart</button>
            </li>
          )
        ))}
        <Link to="/checkout"><button>checkout</button></Link>
      </div>
    )

}
}

const mapState = (state) => ({
    cart: state.cart,
    // user?
    // currentUser: state.me.id
    // currentUser: state.userId
})

const mapDispatch = dispatch => ({
   loadCart: cartId => dispatch(fetchCartThunk(cartId)),
   deleteItem: (cartId, bookId) =>dispatch(removeItemThunk(cartId, bookId))
})

export default connect(mapState, mapDispatch)(Cart)