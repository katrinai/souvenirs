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
          class="btn btn-danger btn-ml active"
          role="button"
          aria-pressed="true"
        >
          I am travelling
        </a>{" "}
        <a
          href="/newrequest"
          class="btn btn-danger btn-ml active"
          role="button"
          aria-pressed="true"
        >
          I have a request
        </a>
      </div>
    );
  }
}

export default Home;
