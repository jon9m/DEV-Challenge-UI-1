import React from 'react';
import '../App.css';
import bitLogo from '../assets/Bitcoin Logo.png';
import ethLogo from '../assets/Ethereum Logo.png';
import litLogo from '../assets/Litecoin Logo.png';

import { NavLink } from 'react-router-dom';

const Currency = (props) => {
    const cls = "currency" + props.symbol;

    let imgView = <img alt={props.symbol} />;;
    if (props.symbol === 'BTC') {
        imgView = <img src={bitLogo} alt={props.symbol} />;
    }
    if (props.symbol === 'ETH') {
        imgView = <img src={ethLogo} alt={props.symbol} />;
    }
    if (props.symbol === 'LTC') {
        imgView = <img src={litLogo} alt={props.symbol} />;
    }

    const toLink = "/profit/" + props.symbol + "/" + props.symbol;

    return (
        <NavLink to={toLink} activeClassName='active'>
            <div className='currency'>
                <div className='imgdiv'>
                    {imgView}
                </div>
            </div>
        </NavLink>
    );
}

export default Currency;