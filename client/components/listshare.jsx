import React from 'react';

const ListShare = (props) => (
  <div id="cart-bottom">
    <div id="cart-list">
      <select id="cart-list-select">
        <option selected>Add to List</option>
        <option>Dark Arts</option>
        <option>Ministry of Magic</option>
        <option>Azkaban</option>
      </select>
    </div>
    <div id="cart-registry">
      <button id="cart-btn-registry"><span id="cart-btn-registry-text">Add to Registry</span></button>
    </div>
    <div id="cart-dash">
      <span className="cart-fakelink">Add to your Flash Buttons</span>
    </div>
    <div id="cart-share">
      <span id="cart-share-link" className="cart-fakelink">Share </span>
      <img className="cart-btn-share" src="https://cart-icons.s3.us-east-2.amazonaws.com/mail.png"></img>
      <img className="cart-btn-share" src="https://cart-icons.s3.us-east-2.amazonaws.com/facebook.png"></img>
      <img className="cart-btn-share" src="https://cart-icons.s3.us-east-2.amazonaws.com/twitter.png"></img>
      <img className="cart-btn-share" src="https://cart-icons.s3.us-east-2.amazonaws.com/pintrest.png"></img>
    </div>
  </div>
);

export default ListShare;