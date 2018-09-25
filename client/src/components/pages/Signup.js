import React, { Component } from "react";
import api from "../../api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    api
      .signup(data)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // later redirect to the "/userprofile" page
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Signup">
        <h3>Signup</h3>
        <form>
          First name:{" "}
          <input
            type="text"
            value={this.state.firstname}
            onChange={e => this.handleInputChange("firstname", e)}
          />{" "}
          <br />
          Last name:{" "}
          <input
            type="text"
            value={this.state.lastname}
            onChange={e => this.handleInputChange("lastname", e)}
          />{" "}
          <br />
          Email*:{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleInputChange("email", e)}
          />{" "}
          <br />
          Username*:{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={e => this.handleInputChange("username", e)}
          />{" "}
          <br />
          Password*:{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={e => this.handleInputChange("password", e)}
          />{" "}
          <br />
          <p>* these fields are required</p>
          <br />
          <p>
            By signing up I do understand that it is not purpose of this app to
            ask colleagues to bring forbidden items such as weapons, drugs or
            other things which are against the law in my current base country.
            <br />I also do understand that I should not ask my colleagues to
            bring smelly cheese...{" "}
          </p>
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>
        <p class="account-message">
          Already signed up? <a href="/login">Login</a>
        </p>
        <br />
      </div>
    );
  }
}

export default Signup;
