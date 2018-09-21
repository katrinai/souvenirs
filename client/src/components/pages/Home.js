import React, { Component } from "react";

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
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
          I am <br />
          travelling
        </a>{" "}
        <button type="button" class="btn btn-primary btn-lg">
          I have a<br />
          request
        </button>
      </div>
    );
  }
}

export default Home;
