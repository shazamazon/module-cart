import React from 'react';

const Price = (props) => (
  <div id="cart-top">
    <div id="cart-price">$34.99</div>
    <div id="cart-prime">
      <img id="cart-logo" src="./images/shazam.png"></img>
      <span id="cart-shazam">SHAZAM!</span>
      <span id="cart-oneday"> FREE Instant-Shipping</span>
    </div>
    <div id="cart-shipping">
      <span>FREE Delivery <b>NOW</b>
      <br></br>
      If you order at anytime.
      <br></br>
      <span className="cart-fakelink">Details</span>
      </span>
    </div>
    <div id="cart-location">
      <img id="cart-pin" src="./images/droppin.png"></img>
      <span className="cart-fakelink"> Deliver to the Ministry of Magic</span>
    </div>
    <div id="cart-stock">
      <span >In Stock.</span>
    </div>
  </div>
);

export default Price;