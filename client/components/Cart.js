import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { loadCart, removeItemThunk} from '../store/cart'
import { loadCart } from '../store/cart'
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  //gives access to redux state
  const cart = useSelector((state) => state.cartReducer);
  const books = cart.books || []

  useEffect(() => {
    dispatch(loadCart());
  }, []);

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
            <button>Remove from Cart</button>
          </div>
        ))}
        <div>
        <Link to="/checkout"><button>Checkout</button></Link>
        </div>

      </div>
    </>
  )
}

export default Cart;

// export class Cart extends React.Component {
//   constructor(){
//     super()
//     this.handleDelete = this.handleDelete.bind(this)

//   }

//   componentDidMount(){
//     this.props.loadCart()
//   }
//   handleDelete (event) {
//     event.preventDefault();
//     const bookId=event.target.value
//     this.props.deleteItem(bookId) 
//   }

//   render() {
//     const cart = this.props.cart || {}
//     const books = this.props.cart.books || []
//     console.log(cart)
//     console.log(books)
//     return (
//       <>
//         <div>
//           <h2>My Cart</h2>
//         </div>
//         <div>
//           {books.length === 0 ? <span>No items in cart!!</span> :
//           books.map(book => (
//             <div key={book.id}>
//               <img src={book.coverimg} />
//               <h3>{book.title}</h3>
//               <h3>{book.author}</h3>
//               <h3>{book.price}</h3>
//               <button onClick={ () => this.props.deleteItem(this.handleDelete)}>Remove from Cart</button>
//             </div>
//           ))}
//           <div>
//           <Link to="/checkout"><button>Checkout</button></Link>
//           </div>

//         </div>
//       </>
//     )
//   }
// }

// const mapState = (state) => ({
//   cart: state.cartReducer
// })

// const mapDispatch = (dispatch) => ({
//   loadCart: (cartId) => dispatch(loadCart(cartId)),
// })

// export default connect(mapState, mapDispatch)(Cart); 