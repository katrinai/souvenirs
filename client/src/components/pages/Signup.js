import React, { Component } from "react";
import api from "../../api";
import {
  Button,
  Form,
  Col,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  FormText
} from "reactstrap";

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
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div className="Signup">
        <h3>Signup</h3>
        <Form>
          <FormGroup row>
            <Label for="exampleName" sm={4}>
              First name:
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                value={this.state.firstname}
                onChange={e => {
                  this.handleInputChange("firstname", e);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleName" sm={4}>
              Last name:
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                value={this.state.lastname}
                onChange={e => {
                  this.handleInputChange("lastname", e);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup role="form" data-toggle="validator" row>
            <Label for="exampleName" sm={4}>
              Email*:
            </Label>
            <Col sm={4}>
              <Input
                invalid
                type="text"
                value={this.state.email}
                onChange={e => {
                  this.handleInputChange("email", e);
                }}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup role="form" data-toggle="validator" row>
            <Label for="exampleName" sm={4}>
              Username*:
            </Label>
            <Col sm={4}>
              <Input
                invalid
                type="text"
                value={this.state.username}
                onChange={e => {
                  this.handleInputChange("username", e);
                }}
              />
              <FormFeedback tooltip>
                Oh! that name is already taken
              </FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="examplePassword" sm={4}>
              Password*:
            </Label>
            <Col sm={4}>
              <Input
                invalid
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={e => {
                  this.handleInputChange("password", e);
                }}
              />
            </Col>
          </FormGroup>

          <br />
          <p>* these fields are required</p>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" />
              By signing up, I understand that the purpose of this app is not to
              ask colleagues to bring forbidden items such as weapons, drugs or
              other things which are not permitted in the country I am currently
              based in.
              <br />I also understand that I should not ask my colleagues to
              bring smelly cheese or the Durian fruit...
            </Label>
          </FormGroup>
          <br />
          <Button color="danger" onClick={e => this.handleClick(e)}>
            Signup
          </Button>
        </Form>
        <br />
        <p class="account-message">
          Already signed up? <a href="/login">Login</a>
        </p>
        <br />
      </div>
    );
  }
}

export default Signup;
