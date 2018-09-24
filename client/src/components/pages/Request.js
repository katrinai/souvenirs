import React, { Component } from "react";
import api from "../../api";

const Request = props => {
  return (
    <div className="Request">
      {
        <ul>
          <li key={props.requestInfo._id}>
            {props.requestInfo._owner}
            {props.requestInfo.title}
            {props.requestInfo.text}
          </li>
        </ul>
      }
    </div>
  );
};

export default Request;
