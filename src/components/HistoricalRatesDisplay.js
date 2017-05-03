import React, { Component } from "react";

const ExchangeRatesDisplay = props => {
  const { base, rates } = props;

  const tableRates = rates.map(rate => {
    return (
      <tr>
        <td />
        <td>{rate.date}</td>
        <td>{rate.rates} </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Base Rate</th>
          <th>{base}</th>
          <th>1</th>
        </tr>
      </thead>
      <tbody>
        {tableRates}
      </tbody>
    </table>
  );
};

export default ExchangeRatesDisplay;
