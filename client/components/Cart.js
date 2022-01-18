import React from 'react'
import { fetchCartThunk, removeItemThunk} from '../store/cart'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
  // constructor(){
  //   super()
  //   this.handleDelete = this.handleDelete.bind(this)
  // }
  componentDidMount(){
    this.props.loadCart()
  }
// async handleDelete (event) {
//   event.preventDefault();
//   const bookId=event.target.value
//   await this.props.deleteItem(bookId) }

  render() {
    const cart = this.props.cart || {};
    const books = this.props.cart.books || [];

    // if (this.props.currentUser.id) {
    //   cart = this.props.cart
    // } else {
    //   let localCart = localStorage.getItem()
    //   cart = JSON.parse(localCart)
    // }
    return (
      <div>
        <h3>Shopping Cart</h3>
        {books.length === 0 ? <span>No items in cart.</span> :
        books.map(book =>{
          <div key={book.id}>
              <h5>Title: {book.title}</h5>
              <img src={book.coverimg} />
              <h5>Price: {(book.price/100).toFixed(2)}</h5>
            <button onClick={ () => this.props.deleteItem(this.handleDelete)}>Remove from Cart</button>
            </div>
        }
            
        )}
        <Link to="/checkout"><button>checkout</button></Link>
      </div>
    )

}
}

const mapState = (state) => ({
    cart: state.cartReducer,
})

const mapDispatch = dispatch => ({
  loadCart: (cartId) => dispatch(fetchCartThunk(cartId)),
   deleteItem: (bookId) =>dispatch(removeItemThunk(bookId))

})

export default connect(mapState, mapDispatch)(Cart)
