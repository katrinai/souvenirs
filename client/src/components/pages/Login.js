import React, { Component } from "react";
import api from "../../api";
import {
  Button,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Login">
        <h3>Login</h3>
        <FormGroup row>
          <Label for="exampleName" sm={4}>
            Username
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              value={this.state.usernam}
              onChange={e => {
                this.handleInputChange("username", e);
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleName" sm={4}>
            Password
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              value={this.state.password}
              onChange={e => {
                this.handleInputChange("password", e);
              }}
            />
          </Col>
        </FormGroup>

        <Button color="danger" onClick={e => this.handleClick(e)}>
          Login
        </Button>
        <br />
        <p class="account-message">
          Don't have an account yet? <a href="/signup">Signup</a>
        </p>
      </div>
    );
  }
}

export default Login;
