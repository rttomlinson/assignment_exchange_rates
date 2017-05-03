import React from "react";

const Input = props => {
    const {
        classes,
        ...restOfProps
    } = props

    const inputClasses = `form-control ${classes}`

    return <input className={inputClasses} {...restOfProps} />;
};

Input.defaultProps = {
    type: "text"
};


export default Input;
