import React, { Component } from "react";
import ExchangeRatesDisplay from "./ExchangeRatesDisplay";
import ExchangeRatesControls from "./ExchangeRatesControls";

import "../App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentBase: "GBP"
    };
    this.rates = {};
    this.codes = [];

    this._dataFetch = this._dataFetch.bind(this);
  }

  componentDidMount() {
    this._dataFetch(this.state.currentBase)
      .then(json => {
        this.setState({
          currentBase: json.base
        });
      })
      .catch();
  }

  _dataFetch(base) {
    return fetch(`http://api.fixer.io/latest?base=${base}`)
      .then(response => response.json())
      .then(json => {
        this.rates = json.rates;
        this.codes = Object.keys(this.rates);
        return json;
      });
  }

  onSelectChange = e => {
    const newBase = e.target.value;
    this._dataFetch(newBase)
      .then(json => {
        this.setState({
          currentBase: newBase
        });
      })
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

      </div>
    );
  }
}

export default App;
