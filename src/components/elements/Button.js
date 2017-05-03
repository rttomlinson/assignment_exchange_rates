import React from "react";

const Button = props => {
  const { color, type, onDelete, id } = props;

  const buttonClass = `btn btn-${color}`;
  return (
    <button onClick={onDelete} className={buttonClass} type={type} value={id}>
      submit
    </button>
  );
};

export default Button;
