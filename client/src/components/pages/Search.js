import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
// import './Sample.css';
import Request from "./Request";

window.api = api;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      requests: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        api.getSearch(this.state.searchText).then(result => {
          this.setState({
            requests: result
          });
        });
      }
    );
  }

  handleSubmit(e) {
    console.log("handleSubmit", e);
    e.preventDefault();
    api.getSearch(this.state.searchText).then(result => {
      this.setState({
        requests: result
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="NewCity">
          <h1>Cities</h1>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="Search">
        <form onSubmit={e => this.handleSubmit(e)}>
          <br />
          <input
            className="input is-rounded"
            type="text"
            style={{ width: "300px" }}
            name="searchText"
            placeholder="Search city here"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <br />
          {/* <button type="submit">Search</button> */}
          <br />
        </form>

        {this.state.requests.length !== 0 ? (
          <h1>Results</h1>
        ) : (
          <h1>No results</h1>
        )}
        {this.state.requests.map(request => (
          <Link to={`/request/${request._id}`}>
            <Request requestInfo={request} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Search;
