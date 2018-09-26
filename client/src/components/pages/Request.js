import React, { Component } from "react";

const Request = props => {
  return (
    <div className="Request">
      {
        <ul>
          <li key={props.requestInfo._id}>
            {props.requestInfo._city.name} - {props.requestInfo.title} -{" "}
            {props.requestInfo._owner}
          </li>
        </ul>
      }
    </div>
  );
};

export default Request;
