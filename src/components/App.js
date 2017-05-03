import React, { Component } from "react";
import ExchangeRatesDisplay from "./ExchangeRatesDisplay";
import HistoricalRatesDisplay from "./HistoricalRatesDisplay";
import ExchangeRatesControls from "./ExchangeRatesControls";

import "../App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentBase: "GBP",
      historicBase: "USD"
    };
    this.rates = {};
    this.codes = [];
    this.historicalRates = [];

    this._dataFetch = this._dataFetch.bind(this);
    this._historicDataFetch = this._historicDataFetch.bind(this);
  }

  componentDidMount() {
    const rates = this._dataFetch(this.state.currentBase).catch();
    const historicalRates = [];
    let date = "-05-03";
    let year = 1999;
    for (let i = 0; i < 3; i++) {
      year++;
      let value = this._historicDataFetch(
        this.state.currentBase,
        this.state.historicBase,
        year + date
      ).catch();
      historicalRates.push(value);
    }

    let historyPromise = Promise.all(historicalRates);

    Promise.all([rates, historyPromise]).then(([rates, historicalRates]) => {
      this.historicalRates = historicalRates;
      this.setState({
        currentBase: rates.base
      });
    });
  }

  _dataFetch(base) {
    return this.setState({
        currentBase: base
      });
  }

  _historicDataFetch(refBase, exchangeBase, date) {
    return fetch(
      `https://api.fixer.io/${date}?symbols=${exchangeBase}&base=${refBase}`
    )
      .then(response => response.json())
      .catch();
  }

  onSelectChange = e => {
    const newBase = e.target.value;
    this._dataFetch(newBase)
      .catch();
  };

  render() {
    return (
      <div className="App">

        <ExchangeRatesControls
          codes={this.codes}
          onChange={this.onSelectChange}
        />
        <ExchangeRatesDisplay
          base={this.state.currentBase}
          rates={this.rates}
        />
        <ExchangeRatesControls
          codes={this.codes}
          onChange={this.onSelectChange}
        />
        <HistoricalRatesDisplay
          base={this.state.currentBase}
          rates={this.historicalRates}
          exchangeBase={this.state.historicBase}
        />

      </div>
    );
  }
}

export default App;
