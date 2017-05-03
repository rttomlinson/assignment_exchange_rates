import React from "react";

const Alert = props => {
  return (
    <div className="jumbotron">
      <h1>PANIC!: {props.error}</h1>
    </div>
  );
};

export default Alert;
