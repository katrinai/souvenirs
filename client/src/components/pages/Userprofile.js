import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import api from "../../api";
import axios from "axios";

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
    axios.get(`http://localhost:3000/api/userprofile`).then(res => {
      let users = res.data;
      this.setState({ users });
    });
  }

  render() {
    let id = this.props.match.params.id;

    // let user = user.find(c => c._id === id); // this does not work; call api for user

    let fields = ["username"];

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
        <h3>Create a request</h3>
        <br />
        <h3>My request list:</h3>
      </div>
    );
  }
}

export default Userprofile;
