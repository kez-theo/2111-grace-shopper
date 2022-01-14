import React from 'react';
import {connect} from 'react-redux';
import {fetchCartThunk} from '../store/cart'

export class Cart extends React.Component{
//   componentDidMount(){
//     this.props.getCart(this.props.match.params.id);
// }
    render(){
      // const cart = this.props.cart
      return(
        <div>
          <h3>CART PAGE in prog..</h3>
          {/* <h4>Cart ID: {order_ID}</h4> */}
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getCart: () => dispatch(fetchCartThunk())  
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);