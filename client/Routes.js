import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
//import UserDataForm from "./components/AddressInfo";
import UserDataForm from "./components/UserDataForm";
import SingleBook from "./components/SingleBook";
import Cart from "./components/Cart";
import Stock from "./components/Stock";
import StockItem from "./components/StockItem";
import Home from "./components/Home";
import { me } from "./store";
import AllUsers from "./components/AllUsers";
import Checkout from "./components/Checkout";
import AddBook from "./components/AddBook";

/**
 * COMPONENT
 */

//Note theres is a slight switch if the user is logged in
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="main">
        {isLoggedIn ? (
          <Switch>
            <Route path="/homepage" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/cart" component={Cart} /> */}
            {/* <Route path="/cart/:username" component={UserCart} /> */}
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route path="/edit" component={UserDataForm} />
            <Route exact path="/stock" component={Stock} />
            <Route path="/stock/:stockId" component={StockItem} />
            <Route path="/users" component={AllUsers} />
            <Route path="/checkout" component={Checkout} />
            <Route path = "/add-book" component = {AddBook} />
            <Redirect to="/homepage" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/homepage" component={Home} />
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/checkout" component={Checkout} />
            {/* <Route path="/cart" component={LocalCart} /> */}
            <Route path="/cart" component={Cart} />

          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isUserAdmin: !!state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
