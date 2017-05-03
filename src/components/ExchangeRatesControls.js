import React, { Component } from "react";

const ExchangeRatesControls = props => {
  const { codes, onChange } = props;
  console.log(codes);
  const optionsComp = codes.map(code => {
    return <option>{code}</option>;
  });

  return (
    <select onChange={onChange}>
      {optionsComp}
    </select>
  );
};

export default ExchangeRatesControls;
