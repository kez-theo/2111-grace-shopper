import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import UserDataForm from "./components/UserDataForm";
import SingleBook from "./components/SingleBook";
import { Cart } from "./components/Cart";
import Home from "./components/Home";
import { me } from "./store";
import AllUsers from "./components/AllUsers";
import Checkout from "./components/Checkout";

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
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/homepage" component={Home} />
            <Route path="/edit" component={UserDataForm} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route path="/edit" component={UserDataForm} />
            <Route path="/users" component={AllUsers} />
            <Route path="/checkout/address" component={Checkout} />
            <Redirect to="/homepage" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/homepage" component={Home} />
            <Route exact path="/books/:bookId" component={SingleBook} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout/address" component={Checkout} />
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
