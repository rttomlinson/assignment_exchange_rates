import React, {
    Component
}
from "react";

class ExchangeRatesDisplay extends Component {
    constructor(props) {
        super(props)


        this.state = {
            rates: {}
        }


    }
    componentDidUpdate() {
        fetch(`https://api.fixer.io/latest?base=${this.props.base}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    rates: json
                })
            });

    }

    componentDidMount() {
        fetch(`https://api.fixer.io/latest?base=${this.props.base}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    rates: json
                })
            });

    }

    render() {
        const {
            base,
            rates
        } = this.state.rates;
        console.log("render this.state", this.state.rates);
        const currencyCodes = Object.keys(this.state.rates);
        const tableRates = currencyCodes.map(code => {
            return (
                <tr>
        <td />
        <td>{code}</td>
        <td>{rates[code]} </td>
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
    }
};

export default ExchangeRatesDisplay;
