import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { API_CURRENCY_LIST } from './config/AppConfig';
import Currency from './components/Currency';
import { Route, Switch, Redirect } from 'react-router';
import Profit from './components/Profit';

class App extends Component {
  state = {};

  componentDidMount() {
    axios.get(API_CURRENCY_LIST)
      .then(response => {
        console.log(response.data);
        this.setState({ symbols: response.data })
      });
  }

  render() {
    console.log("Rendering.........App");
    let routes = (
      <Switch>
        <Route key='BTC' path="/profit/BTC/:symbol" exact component={Profit} />
        <Route key='ETH' path="/profit/ETH/:symbol" exact component={Profit} />
        <Route key='LTC' path="/profit/LTC/:symbol" exact component={Profit} />
      </Switch>
    );


    const symbols = this.state.symbols;
    let currencies = <p>No currencies available!'</p>;
    if (symbols) {
      currencies = symbols.map(curr => {
        return <Currency symbol={curr} key={curr} />
      })
    }

    return (
      <div className='all'>
        <div className="items">
          {currencies}
        </div>
        <div className='profitcontent'>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
