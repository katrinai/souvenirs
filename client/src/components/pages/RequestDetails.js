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

class RequestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {},
      username: "",
      name: "", //citynname
      //from: "",
      to: "",
      subject: "",
      message: "",
      taken: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRequestFullfill = this.handleRequestFullfill.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRequestFullfill(event) {
    alert("A message was sent to: " + this.state.to);
    event.preventDefault();
    let data = {
      requestId: this.state.request._id,
      to: this.state.to,
      subject: this.state.subject,
      message: this.state.message
    };
    api
      .postSendEmail(data)
      .then(result => {
        console.log("Message sent?", result);
        this.props.history.push("/search");
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  componentDidMount() {
    api.getRequestDetails(this.props.match.params.id).then(result => {
      console.log("RESULT", result);

      this.setState({
        request: result.details,
        username: result.username,
        name: result.name, //cityname,
        //from: "", // this should be the logged in user email
        to: result.details._owner.email
      });
    });
  }

  render() {
    console.log("REQUEST", this.state.username);
    return (
      <div className="RequestDetails">
        <h3>Request details</h3>
        City: <strong>{this.state.name}</strong>
        <br />
        Title: <strong>{this.state.request.title}</strong>
        <br />
        Description: {this.state.request.text}
        <br />
        End Date: {this.state.request.endDate}
        <br />
        Owner: {this.state.username}
        <br />
        <br />
        <h3>Contact request owner</h3>
        <Form onSubmit={this.handleRequestFullfill}>
          <input
            type="email"
            style={{ width: "200px" }}
            placeholder="Email address of owner"
            name="email"
            id=""
            value={this.state.to}
          />
          <br />
          <input
            type="text"
            style={{ width: "200px" }}
            placeholder="Subject"
            name="subject"
            id=""
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            style={{ width: "300px", height: "200px" }}
            placeholder="Your message: Who are you?
            When do you travel?
            How much space is in your lugguage?"
            name="message"
            id=""
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Send</button>
          <br />
        </Form>
      </div>
    );
  }
}

export default RequestDetail;
