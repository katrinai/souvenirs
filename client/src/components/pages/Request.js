import React, { Component } from "react";
import { Card, CardTitle, CardText, Button } from "reactstrap";

const Request = props => {
  return (
    <div>
      <Card
        body
        className="text-center"
        style={{ width: "300px", height: "150px" }}
      >
        <tr key={props.requestInfo._id} />
        <CardTitle>{props.requestInfo._city.name}</CardTitle>
        <CardText>{props.requestInfo.title}</CardText>
        <Button>Details</Button>
      </Card>

      {/* <table className="request-table">
        <tbody>
          <tr key={props.requestInfo._id}>
            {props.requestInfo._city.name} - {props.requestInfo.title}
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Request;
