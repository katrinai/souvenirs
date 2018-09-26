import React, { Component } from "react";
import {
  Button,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";

class Home extends Component {
  handleClick() {
    alert("Are you logged in?");
    console.log("handleClick");
  }

  render() {
    return (
      <div className="Home">
        <h3>Souvenirs</h3>
        <p>
          Souvenirs is a social platform to share requests from colleagues
          abroad. <br />
          <br /> Search for the destination of your next business trip and find
          out how you can help your colleagues. <br /> Create a request to ask
          colleagues to bring you some souvenirs on their next business trip.
        </p>
        <br />
        <a
          href="/search"
          className="btn btn-danger btn-ml active"
          role="button"
          aria-pressed="true"
          onClick={e => this.handleClick()}
        >
          I am travelling
        </a>{" "}
        <a
          href="/newrequest"
          className="btn btn-danger btn-ml active"
          role="button"
          aria-pressed="true"
          onClick={e => this.handleClick()}
        >
          I have a request
        </a>
      </div>
    );
  }
}

export default Home;
