import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import api from "../../api";
import axios from "axios";

class Userprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
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
        {/* <Router>
          <div>
            <Route exact path="/userprofile/:id" component={Userprofile} />
          </div>
        </Router> */}
        This is the User profile page
        {/* <ul>
          {this.state.users.map((user, idx) => {
            return (
              <Link to={`/userprofile/${user._id}`} key={idx}>
                <li>Username: {user.username}</li>
                <li>Firstname: {user.firstname}</li>
                <li>Lastname: {user.lastname}</li>
                <li>Email: {user.email}</li>
              </Link>
            );
          })}
        </ul>
        <br />
        <button type="?">Create request</button>
        <br /> */}
      </div>
    );
  }
}

export default Userprofile;
