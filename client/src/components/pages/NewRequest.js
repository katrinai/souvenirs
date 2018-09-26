import React, { Component } from "react";
import api from "../../api";
import {
  Button,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  FormText
} from "reactstrap";

class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      endDate: "",
      _city: null,
      // _owner: req.user._id,
      // _city: req.city._id,
      message: null,
      cities: []
    };
  }
  componentDidMount() {
    api.getCities().then(cities => {
      this.setState({
        cities
      });
    });
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;
    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.title);
    let data = {
      title: this.state.title,
      text: this.state.text,
      endDate: this.state.endDate,
      _city: this.state._city
    };
    api
      .postNewRequest(data)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/userprofile");
      })
      .catch(err => {
        console.log("ERROR");
      });
  }

  render() {
    return (
      <div>
        <h3>New request</h3>
        <Form>
          <FormGroup row>
            <Label for="exampleName" sm={4}>
              Title:
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                value={this.state.title}
                placeholder="Short and clear title"
                onChange={e => {
                  this.handleInputChange("title", e);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleName" sm={4}>
              Description:
            </Label>
            <Col sm={4}>
              <Input
                type="textarea"
                value={this.state.text}
                placeholder="Any specifications?"
                onChange={e => {
                  this.handleInputChange("text", e);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleName" sm={4}>
              End Date:
            </Label>
            <Col sm={4}>
              <Input
                type="date"
                value={this.state.endDate}
                placeholder="dd.mm.yyyy"
                onChange={e => {
                  this.handleInputChange("endDate", e);
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="selectCity" sm={4}>
              Select a city:
            </Label>
            <Col sm={4}>
              <Input
                type="select"
                name="_city"
                id="selectCity"
                onChange={e => this.handleInputChange("_city", e)}
              >
                {this.state.cities.map(city => (
                  <option value={city._id}>{city.name}</option>
                ))}
              </Input>
            </Col>
          </FormGroup>

          <br />
          <Button color="danger" onClick={e => this.handleClick(e)}>
            Create request
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewRequest;
