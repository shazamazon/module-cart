import React from 'react';

const Purchase = (props) => (
  <div id="cart-buttons">
    <div id="cart-quantity">
      <select>
        <option value="" disabled selected>Qty: 1</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div id="cart-add">
      <button id="cart-btn-add">
        <img id="cart-cart" src="https://cart-icons.s3.us-east-2.amazonaws.com/cart.png"></img>
        <span id="cart-add-text">Add to Cart</span>
      </button>
    </div>
    <div id="cart-soldby">
      <span>Sold by </span>
      <span className="cart-fakelink">Wizards 'R' Us</span>
      <span> and fulfilled by </span>
      <span className="cart-fakelink">Shazamazon</span>
      <span>.</span>
    </div>
    <div className="cart-separator">
      <span className="cart-line">--------------<span className="cart-oneclick"> or 1-Click Checkout </span>--------------</span>
    </div>
    <div id="cart-oneclick">
      <button id="cart-btn-oneclick">
        <img id="cart-click" src="https://cart-icons.s3.us-east-2.amazonaws.com/oneclick.png"></img>
        <span id="cart-click-text">Buy now with 1-Click</span>
      </button>
    </div>
    <div id="cart-gift">
      <input type="checkbox"></input><span>  This is a gift.</span>
    </div>
    <div className="cart-separator">
      <span className="cart-line">_________________________________</span>
      <br></br>
      <span className="cart-line">_________________________________</span>
      <br></br>
    </div>
  </div>
);

export default Purchase;