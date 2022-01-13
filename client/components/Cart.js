import React from 'react';
import {connect} from 'react-redux';
import {fetchCartThunk} from '../store/cart'

export class Cart extends React.Component{

    render(){
      return(
        <div>CART PAGE in prog..</div>
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