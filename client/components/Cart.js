import React from 'react'


class Cart extends React.Component {
//   let cartArr = props.cart.books
//   //GuestUser 
// //IF props.cart.items does not exist
//   if (!cartArr) {
//     cartArr = props.cart
//   }
//   let hasBooks = false;
//   if (cartArr.length > 0) {
//     hasBooks = true
  
render(){
  return (
    <div>
      <h2>USER's cart is empty cart</h2>
    </div>
    
  )
}
  
}

export default Cart

//     <div>
//       {/* {hasBooks ? (
//         <div>
//           <table className="cart left">
//             <thead className="table-head">
//               <tr>
//                 <th />
//                 <th scope="col">Book</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Total Price</th>
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {books &&
//                 books.map(book => {
//                   if (props.user) {
//                     return (
//                       <CartProduct
//                         key={book.id}
//                         book={book}
//                         userId={props.user.id}
//                         cartId={props.cart.id}
//                         remove={props.remove}
//                       />
//                     )
//                   } else {
//                     return (
//                       <GuestCartProduct
//                         key={book.id}
//                         book={book}
//                         remove={props.handleRemove}
//                         edit={(event, name) => props.edit(event, name)}
//                       />
//                     )
//                   }
//                 })}
//             </tbody>
//           </table>
//           {books && <CartTotal cart={props.cart} />}
//         </div>
//       ) : ( */}
//         <p>Your cart's empty!</p>
//       )}
//     </div>
//   )
// }