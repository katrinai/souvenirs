import React, { Component } from "react";
import api from "../../api";

const Request = props => {
  return (
    <div className="Request">
      {
        <ul>
          <li key={props.requestInfo._id}>
            {props.requestInfo.title} <br />
            {props.requestInfo._owner.username} <br />
          </li>
        </ul>
      }
    </div>
  );
};

export default Request;
