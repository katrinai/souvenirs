import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import Request from "./Request";
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
      email: "",
      requests: []
    };
    if (!api.isLoggedIn()) {
      this.props.history.push("/login")
    }
  }
  componentDidMount() {
    api.getUserprofile().then(result => {
      console.log("RESULT", result);

      this.setState({
        username: result.user.username,
        firstname: result.user.firstname,
        lastname: result.user.lastname,
        email: result.user.email,
        requests: result.requests
      });
    });
    // api
    //   .getRequests()
    //   .then(requests => {
    //     console.log(requests);
    //     this.setState({
    //       requests: requests
    //     });
    //   })
    //   .catch(err => console.log(err));
  }

  handleDelete(id) {
    console.log("handleDelete");
    api.deleteRequest(id).then(data => {
      if (data.success) {
        this.setState({
          requests: this.state.requests.filter(request => request._id !== id)
        });
      }
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
        <br />
        <h3>My requests:</h3>
        <table className="center-table">
          <tbody>
            {this.state.requests.map(request => (
              <tr key={request._id}>
                <td>
                  <strong>{request.title}</strong>
                </td>
                <td>{request.text}</td>
                <td>
                  <Button
                    className="btn btn-danger btn-ml active"
                    onClick={e => this.handleDelete(request._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {this.state.requests.map(request => (
          <Link to={`/request/${request._owner._id}`}>
            <Request requestInfo={request} />
          </Link>
        ))} */}
      </div>
    );
  }
}

export default Userprofile;
