import React, {
    Component
}
from 'react';
import ExchangeRatesDisplay from './ExchangeRatesDisplay'
import ExchangeRatesControls from './ExchangeRatesControls'

import '../App.css';

class App extends Component {
    constructor() {
        super()

        this.state = {
            currentBase: 'GBP'
        };
        this.rates;
    }

    componentsDidMount() {

        fetch("http://api.fixer.io/latest")
            .then(response => response.json())
            .then((json) => {
                this.rates = json.rates;

                this.setState({
                    base: json.base
                });
            });
    }



    render() {
        return (
            <div className="App">
      
      
        <ExchangeRatesDisplay />
        <ExchangeRatesControls />  
      

      </div>
        );
    }
}

export default App;
