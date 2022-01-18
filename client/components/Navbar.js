import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
//come back and put the logo in. It says you may need an appropriate type of loader to get this to work
//need to serve up an img file
//import Logo from "../../public/Logo.png"



const Navbar = ({ handleClick, isLoggedIn, isUserAdmin }) => (
  <div>
    <nav>
      <h1>
        <Link className="logo" to="/homepage">
          Book Shopper
        </Link>
      </h1>

      {isLoggedIn ? (
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/edit">Profile</Link>
          {/* The navbar will show these links after you log in */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          {isUserAdmin && (
            <div>
              <Link to="/stock">Stock</Link>
              <Link to="/users">Users</Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isUserAdmin: !!state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
