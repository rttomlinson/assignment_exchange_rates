import React, {
    Component
}
from 'react';

const ExchangeRatesDisplay = (props) => {
    const {
        base,
        rates
    } = props;
    
    const currencyCodes = Object.keys(rates);
    const tableRates = currencyCodes.map((code) => {
        return (
            <tr>
              <td></td>
              <td>{ code }</td>
              <td>{ rates[code]} </td>
            </tr>
        );
    });

    return (
        <table class="table">
          <thead>
            <tr>
              <th>Base Rate</th>
              <th>{ base }</th>
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
