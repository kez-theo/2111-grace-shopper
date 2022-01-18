import React from 'react'
import { fetchCartThunk, removeItemThunk} from '../store/cart'
// import { fetchUsers } from '../store/users'
import { cartPlusThunk, cartMinusThunk } from '../store/cart'
import { connect } from 'react-redux';

export class Cart extends React.Component {
  componentDidMount(){
    this.props.loadCart(this.props.match.params.cartId)
}
 

  render() {
    const cart = this.props.cart || [];
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
      <div>
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
})

const mapDispatch = dispatch => ({
   loadCart: cartId => dispatch(fetchCartThunk(cartId)),
   deleteItem: (cartId, bookId) =>dispatch(removeItemThunk(cartId, bookId))
  //  currentUser: () =>dispatch()

})

export default connect(mapState, mapDispatch)(Cart)
