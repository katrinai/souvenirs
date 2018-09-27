import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
// import './Sample.css';
import Request from "./Request";
import { Form, Col, FormGroup, Input, Label } from "reactstrap";

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

  // componentDidMount()

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
        <br />

        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup row>
            <Label className="text-right" for="searchText" sm={4}>
              Search for a city:
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                className="input is-rounded"
                name="searchText"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
        </Form>

        {this.state.requests.length !== 0 ? (
          <h3>Results</h3>
        ) : (
          <h3>No results</h3>
        )}

        {this.state.requests.map(request => (
          <Link
            key={request._id + "link"}
            style={{ color: "red" }}
            to={`/request/${request._id}`}
          >
            <Request key={request._id} requestInfo={request} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Search;
