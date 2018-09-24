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
        name: result.name
        //cityname
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
      </div>
    );
  }
}

export default RequestDetail;
