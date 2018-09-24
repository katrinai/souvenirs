import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
// import api from '../api';
// import './Sample.css';

class SendEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      subject: "",
      text: ""
    };
  }

  render() {
    return <h1>Send Email page</h1>;
  }
}

export default SendEmail;
