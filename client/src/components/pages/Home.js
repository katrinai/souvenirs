import React, { Component } from "react";

class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is the home page of Souvenirs</p>
        <br />
        <p>Information will be displayed here.</p>
        <a
          href="/search"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          I am travelling
        </a>{" "}
        <a
          href="/add-request" // or is it /userprofile/addrequest ?
          class="btn btn-primary btn-lg active"
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
