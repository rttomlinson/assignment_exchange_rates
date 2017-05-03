import React, { Component } from "react";

const HistoricalRatesDisplay = props => {
  const { base, exchangeBase, rates } = props;

  const tableRates = rates.map(rate => {
    return (
      <tr>
        <td />
        <td>{rate.date}</td>
        <td>{rate.rates[exchangeBase]} </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Base Rate</th>
          <th>{base}</th>
          <th>{exchangeBase}</th>
        </tr>
      </thead>
      <tbody>
        {tableRates}
      </tbody>
    </table>
  );
};

export default HistoricalRatesDisplay;
