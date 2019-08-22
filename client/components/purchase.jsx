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
        <img id="cart-cart" src="./images/cart.png"></img>
        <span id="cart-add-text">Add to Cart</span></button>
    </div>
    <div id="cart-soldby">

    </div>
    <div className="cart-separator">

    </div>
    <div id="cart-oneclick">

    </div>
    <div id="cart-orderby">

    </div>
    <div id="cart-gift">

    </div>
    <div className="cart-separator">

    </div>
  </div>
);

export default Purchase;