import React from 'react'
import { fetchCartThunk, removeItemThunk} from '../store/cart'
// import { fetchUsers } from '../store/users'
// import { cartPlusThunk, cartMinusThunk } from '../store/cart'
import { connect } from 'react-redux';

export class Cart extends React.Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    this.props.loadCart(this.props.match.params.cartId)
}
async handleDelete (event) {
  event.preventDefault();
  const bookId=event.target.value
  await this.props.deleteItem(bookId)
}
  render() {
    const cart = this.props.cart || [];
    // if (this.props.currentUser.id) {
    //   cart = this.props.cart
    // } else {
    //   let localCart = localStorage.getItem('CART')
    //   cart = JSON.parse(localCart)
    // }
    return (
      <div>
        <h3>My Cart</h3>
        {(cart.length === 0 ? <span>No items in cart.</span> :
        cart.map(book =>{
          <li key={book.id}>
              Title: {book.title} <br/>
              Price: {this.props.book.price}<br/>
            <button onClick={ () => this.props.deleteItem(this.handleDelete)}>Remove from Cart</button>
            </li>
        }
            
        ))}
        <Link to="/checkout"><button>checkout</button></Link>
      </div>
    )

}
}

const mapState = (state) => ({
    cart: state.cart,
    user: state.user
})

const mapDispatch = dispatch => ({
   loadCart: () => dispatch(fetchCartThunk()),
   deleteItem: (bookId) =>dispatch(removeItemThunk(bookId))
  //  currentUser: () =>dispatch()

})

export default connect(mapState, mapDispatch)(Cart)
