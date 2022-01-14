import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

<<<<<<< HEAD
const Navbar = ({handleClick, isLoggedIn, isUserAdmin}) => (
=======
const Navbar = ({ handleClick, isLoggedIn, isUserAdmin }) => (
>>>>>>> e54ce5bdaf51ec6d07c6076a83cb171ed8bba771
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
          {isUserAdmin && 
          <div>
            <Link to="/stock">Stock</Link>
          </div>}
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
    isUserAdmin: !!state.auth.isAdmin
<<<<<<< HEAD
  }
}
=======
  };
};
>>>>>>> e54ce5bdaf51ec6d07c6076a83cb171ed8bba771

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
