import React from 'react';
import App from './app.jsx';

const BuyNow = (props) => {

    return (
        <div id='cart-disable'>
            <div id='cart-expanded'>
                <div id="cart-buy-title">
                    <span id="cart-buy-title-text"><b>Buy Now</b></span>
                    <span id='cart-close' onClick={() => props.openCloseModal(false)}>
                        <img src='https://shazamazon.s3.us-east-2.amazonaws.com/icons/close.png' />
                    </span>
                    </div>
                    <div id="cart-buy-shipto">
                        <span className="cart-buy-lefttext">Ship To</span>
                        <span className="cart-buy-centertext">Zubair Desai</span>
                    </div>
                    <div id="cart-buy-paywith">
                        <span className="cart-buy-lefttext">Pay With</span>
                        <span className="cart-buy-centertext">Shazamazon.com Store Card</span>
                    </div>
                    <div id="cart-buy-getby">
                        <span className="cart-buy-lefttext">Get it by</span>
                        <span className="cart-buy-centertext">{props.currentPrice >= 25 ? 'NOW' : 'Tomorrow'}</span>
                    </div>
                    <div id="cart-buy-total">
                        <span className="cart-buy-lefttext">Total</span>
                        <span id="cart-buy-price">${props.currentPrice}</span>
                    </div>
                    <div id="cart-buy-order">
                        <button id="cart-buy-orderBtn" onClick={() => props.openCloseModal(false)}>Place your order</button>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;

