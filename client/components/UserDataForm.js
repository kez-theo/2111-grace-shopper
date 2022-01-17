import React from "react";
import { connect } from "react-redux";

//NEED to create thunks to hit the database and send this data to

//For best practice do we use
class UserDataForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      cityAddress: "",
      zipcode: 0,
      phoneNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  }

  // handleSubmit(evt){
  //     evt.preventDefault();
  //     this.props.updateUser({...this.state })
  //     this.setState({}) <-- readjust this to
  // }

  render() {
    const { /*handleSubmit,*/ handleChange } = this;
    const {
      firstName,
      lastName,
      email,
      streetAddress,
      cityAddress,
      zipcode,
      phoneNumber,
    } = this.state;

    return (
      <div>
        <form name={userData}>
          <div>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>

          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>

          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>

          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>

          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="email" />
          </div>

          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="email" />
          </div>

          <div>
            <label htmlFor="streetAddress">
              <small>Street</small>
            </label>
            <input name="streetAddress" type="streetAddress" />
          </div>

          <div>
            <label htmlFor="cityAddress">
              <small>City</small>
            </label>
            <input name="cityAddress" type="cityAddress" />
          </div>

          <div>
            <label htmlFor="zipcode">
              <small>Zipcode</small>
            </label>
            <input name="zipcode" type="zipcode" />
          </div>

          <div>
            <button type="submit">{displayName}</button>
          </div>

          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
}

//Would I include this if I switch the signup page to be a seprate component
// const mapSignup = state => {
//     return {
//       name: 'signup',
//       displayName: 'Sign Up',
//       error: state.auth.error
//     }
//   }

//This is not actually connected to any thunk, I'll need to go back and change this
const mapDispatchToProps = (dispatch, { history }) => ({
  createUser: (user) => dispatch(createUser(user, history)),
});

export default connect(null, mapDispatchToProps)(UserDataForm);
