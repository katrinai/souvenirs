import React, { Component } from "react";
import api from "../../api";

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    api
      .getRequests()
      .then(requests => {
        console.log(requests);
        this.setState({
          requests: requests
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="Requests">
        <h2>List of requests</h2>
        {this.state.requests.map((c, i) => (
          <li key={i}>
            {c._owner}
            {c.title}
            {c.text}
          </li>
        ))}
      </div>
    );
  }
}

export default Requests;
