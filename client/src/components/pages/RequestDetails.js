import React, { Component } from "react";
import Request from "./Request";
// import { Router, Switch, NavLink, Link } from "react-router-dom";
import api from "../../api";
// import './Sample.css';

class RequestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {},
      username: "",
      name: "" //cityname
    };
  }

  componentDidMount() {
    api.getRequestDetails(this.props.match.params.id).then(result => {
      console.log("RESULT", result);

      this.setState({
        request: result.details,
        username: result.username,
        name: result.name //cityname
      });
    });
  }

  render() {
    console.log("REQUEST", this.state.username);
    return (
      <div className="RequestDetails">
        <h1>Request details</h1>
        City: {this.state.name}
        <br />
        Title: {this.state.request.title}
        <br />
        Description: {this.state.request.text}
        <br />
        End Date: {this.state.request.endDate}
        <br />
        Owner: {this.state.username}
        <br />
        <br />
        <h3>Contact request owner</h3>
        <form action="/send-email" method="post">
          {/* <label for="">Email</label> */}
          <input
            type="email"
            style={{ width: "200px" }}
            placeholder="Emailadress of owner"
            name="email"
            id=""
          />
          <br />
          {/* <label for="">Subject</label> */}
          <input
            type="text"
            style={{ width: "200px" }}
            placeholder="Subject"
            name="subject"
            id=""
          />
          <br />
          {/* <label for="">Message</label> */}
          <textarea
            type="text"
            style={{ width: "200px", height: "200px" }}
            placeholder="Write your message here"
            name="message"
            id=""
          />
          <br />
          <button type="submit">Send</button>
          <br />
        </form>
      </div>
    );
  }
}

export default RequestDetail;
