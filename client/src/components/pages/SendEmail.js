import React, { Component } from "react";

class SendEmail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     from: "",
  //     to: "",
  //     subject: "",
  //     text: ""
  //   };
  // }

  // componentDidMount() {
  //   api.getRequestDetails(this.props.match.params.id).then(result => {
  //     console.log("RESULT", result);

  //     this.setState({
  //       to: result.details,
  //       username: result.username,
  //       name: result.name //cityname
  //     });
  //   });
  // }

  render() {
    return <h3>Send Email page</h3>;
  }
}

export default SendEmail;
