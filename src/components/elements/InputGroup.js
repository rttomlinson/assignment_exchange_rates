import React from "react";

const InputGroup = props => {

  const { name, labelText, children } = props;

  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      {children}
    </div>
  );
};

export default InputGroup;
