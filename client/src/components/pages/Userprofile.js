import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import api from "../../api";
import axios from "axios";
import {
  Button,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";

class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: ""
    };
  }
  componentDidMount() {
    api.getUserprofile().then(result => {
      console.log("RESULT", result);

      this.setState({
        username: result.user.username,
        firstname: result.user.firstname,
        lastname: result.user.lastname,
        email: result.user.email
      });
    });
  }

  render() {
    return (
      <div className="Userprofile">
        <h3>User profile</h3>
        Username: {this.state.username}
        <br />
        First name: {this.state.firstname}
        <br />
        Last name: {this.state.lastname}
        <br />
        Email: {this.state.email}
        <br />
        <br />
        <a
          href="/newrequest"
          className="btn btn-danger btn-ml active"
          role="button"
          aria-pressed="true"
        >
          Create a request
        </a>
        <br />
        <h3>My request list:</h3>
        {/* req.user._id */}
      </div>
    );
  }
}

export default Userprofile;
