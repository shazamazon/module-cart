import React from 'react';
import App from './app.jsx'

const Price = (props) => {

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  let ship;
  let time;
  let midnight = new Date();

  midnight.setHours(24, 0, 0, 0);

  let hours = Math.floor(( midnight.getTime() - new Date().getTime() ) / 1000 / 60 /60);
  let minutes = Math.floor(((midnight.getTime() - new Date().getTime() ) / 1000 / 60)% 60);

  time = `${hours} hrs ${minutes} mins.`;

  if (props.price < 25) {
    ship = (<span>Get FREE delivery <b>NOW</b> if you order $25 of qualifying items and choose this date at checkout. </span>);
  } else {
    ship = (<span><span>Get FREE delivery: <b>NOW</b></span><br></br><span id="cart-oneday">Order within {time} </span></span>);
  }

  return (
      <div id="cart-top">
        <div id="cart-price">{formatter.format(props.price)}</div>
        <div id="cart-prime">
          <img id="cart-logo" src="https://cart-icons.s3.us-east-2.amazonaws.com/shazam.png"></img>
          <span id="cart-shazam">SHAZAM!</span>
          <span id="cart-oneday"> FREE Instant-Manifestation</span>
        </div>
        <div id="cart-shipping">
          {ship}
          <span className="cart-fakelink">Details</span>
        </div>
        <div id="cart-location">
          <img id="cart-pin" src="https://cart-icons.s3.us-east-2.amazonaws.com/droppin.png"></img>
          <span> </span><span className="cart-fakelink">Deliver to Austin, TX 78744</span>
        </div>
        <div id="cart-stock">
          <span >In Stock.</span>
        </div>
      </div>
  );
}

export default Price;