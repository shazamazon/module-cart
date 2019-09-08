import React from 'react';
import App from './app.jsx';


const Purchase = (props) => {

  const changeValue = (event) => {
    props.changeQuantity(event.target.value);
  }

  return (
  <div id="cart-buttons">
    <div id="cart-quantity">
      <select onChange={changeValue} value={props.select}>
        <option value="">Qty: 1</option>
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
      <button id="cart-btn-add" onClick={() => props.cartSubmit(props.quantity)}>
        <img id="cart-cart" src="https://cart-icons.s3.us-east-2.amazonaws.com/cart.png"></img>
        <span id="cart-add-text">Add to Cart</span>
      </button>
    </div>
    <div id="cart-soldby">
      <span>Sold by </span>
      <span className="cart-fakelink">{props.seller}</span>
      <span> and fulfilled by </span>
      <span className="cart-fakelink">Shazamazon</span>
      <span>.</span>
    </div>
    <div className="cart-separator">
      <span className="cart-click-line">              </span><span className="cart-oneclick"> or 1-Click Checkout </span><span className="cart-click-line">              </span>
    </div>
    <div id="cart-oneclick">
      <button id="cart-btn-oneclick" onClick={() => props.openCloseModal(true)}>
        <img id="cart-click" src="https://cart-icons.s3.us-east-2.amazonaws.com/oneclick.png"></img>
        <span id="cart-click-text">Buy now with 1-Click</span>
      </button>
    </div>
    <div id="cart-gift">
      <input type="checkbox"></input><span>  This is a gift.</span>
    </div>
    <div className="cart-separator">
      <div className="cart-line"></div>
      <div className="cart-line"></div>
      <br></br>
    </div>
  </div>
  )
}

export default Purchase;