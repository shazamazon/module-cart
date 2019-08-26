import React from 'react';
import App from './app.jsx'

const Price = (props) => {

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
      <div id="cart-top">
        <div id="cart-price">{formatter.format(props.price)}</div>
        <div id="cart-prime">
          <img id="cart-logo" src="https://cart-icons.s3.us-east-2.amazonaws.com/shazam.png"></img>
          <span id="cart-shazam">SHAZAM!</span>
          <span id="cart-oneday"> FREE Instant-Shipping</span>
        </div>
        <div id="cart-shipping">
          <span>Get FREE delivery <b>NOW</b> if you order $35 of qualifying items and choose this date at checkout.</span>
          <span className="cart-fakelink">Details</span>
        </div>
        <div id="cart-location">
          <img id="cart-pin" src="https://cart-icons.s3.us-east-2.amazonaws.com/droppin.png"></img>
          <span> </span><span className="cart-fakelink">Deliver to the Ministry of Magic</span>
        </div>
        <div id="cart-stock">
          <span >In Stock.</span>
        </div>
      </div>
    );
}

export default Price;