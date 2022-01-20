import React from 'react'
// import { loadCart, removeItemThunk} from '../store/cart'
import { loadCart } from '../store/cart'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
  constructor(){
    super()
    this.handleDelete = this.handleDelete.bind(this)

  }
  
  componentDidMount(){
    this.props.loadCart()
  }
  handleDelete (event) {
    event.preventDefault();
    const bookId=event.target.value
    this.props.deleteItem(bookId) 
  }

  render() {
    const cart = this.props.cart || {}
    const books = this.props.cart.books || []
    console.log(cart)
    console.log(books)
    return (
      <>
        <div>
          <h2>My Cart</h2>
        </div>
        <div>
          {books.length === 0 ? <span>No items in cart!!</span> :
          books.map(book => (
            <div key={book.id}>
              <img src={book.coverimg} />
              <h3>{book.title}</h3>
              <h3>{book.author}</h3>
              <h3>{book.price}</h3>
              <button onClick={ () => this.props.deleteItem(this.handleDelete)}>Remove from Cart</button>
            </div>
          ))}
          <div>
          <Link to="/checkout"><button>Checkout</button></Link>
          </div>
            
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


//   render() {
//     const cart = this.props.cart || {};
//     const books = this.props.cart.books || [];

//     return (
//       <div>
//         <h3>Shopping Cart</h3>
//         {books.length === 0 ? <span>No items in cart.</span> :
//         books.map(book =>{
//           <div key={book.id}>
//               <h5>Title: {book.title}</h5>
//               <img src={book.coverimg} />
//               <h5>Price: {(book.price/100).toFixed(2)}</h5>
            <button onClick={ () => this.props.deleteItem(this.handleDelete)}>Remove from Cart</button>
//             </div>
//         }
            
//         )}
//         <Link to="/checkout"><button>checkout</button></Link>
//       </div>
//     )

// }
// }

// const mapState = (state) => ({
//     cart: state.cartReducer,
// })

// const mapDispatch = dispatch => ({
//   loadCart: (cartId) => dispatch(loadCart(cartId)),
//   //  deleteItem: (bookId) =>dispatch(removeItemThunk(bookId))
// })

// export default connect(mapState, mapDispatch)(Cart)
