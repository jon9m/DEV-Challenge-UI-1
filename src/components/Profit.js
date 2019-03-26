import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { API_PROFIT_DETAILS } from '../config/AppConfig';

class Profit extends Component {
    state = { profit: null };

    componentDidMount() {
        const { symbol } = this.props.match.params;
        console.log(symbol);

        const profitUrl = API_PROFIT_DETAILS + symbol;
        axios.get(profitUrl)
            .then(response => {
                console.log(response.data);
                this.setState({ profit: response.data });
            });
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.match.params.symbol !== this.props.match.params.symbol) {
    //         console.log("nextProps.match.params.symbol " + nextProps.match.params.symbol);
    //     }
    // }

    render() {
        console.log("Rendering.........Profit");        
        let profitData = 'Loading...';

        if (this.state.profit) {
            let profit = Number(this.state.profit.profit).toFixed(2);

            profitData =
                <div>
                    <table className='profittable'>
                        <tbody>
                            <tr>
                                <td colSpan='2'>{this.state.profit.currency}</td>
                            </tr>
                            <tr>
                                <td>Buy</td><td>Sell</td>
                            </tr>
                            <tr>
                                <td>${this.state.profit.boughtPrice}</td><td>${this.state.profit.soldPrice}</td>
                            </tr>
                            <tr>
                                <td>{this.state.profit.boughtTime}</td><td>{this.state.profit.soldTime}</td>
                            </tr>
                            <tr>
                                <td>Profit</td><td> ${profit}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        }


        return (
            <div className='profit'>
                {profitData}
            </div>
        );
    }
}

export default Profit;