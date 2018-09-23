import React, { Component } from "react";
// import { Route, Switch, NavLink, Link } from "react-router-dom";
import api from "../../api";
// import './Sample.css';

window.api = api;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      // cities: cities.name,
      numberOfCities: 1,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log("handleSubmit", e);
    e.preventDefault();
    api.getSearch(this.state.searchText).then(result => {
      // write more here
      this.props.history.push("/");
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
        <button type="submit">Search</button>
        <br />
      </form>
    );
  }
}

export default Search;
