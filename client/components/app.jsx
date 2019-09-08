import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Price from './price.jsx';
import Purchase from './purchase.jsx';
import ListShare from './listshare.jsx';
import BuyNow from './buyNow.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentItem: [{"_id":"5d63f92b62a1c90237983dfb","ProductId":38,"Price":14.95,"SoldBy":"Walden Macnair"}],
                   currentPrice: 14.95,
                   currentSeller: 'Walden Macnair',
                   quantity: 1,
                   select: '',
                   buyNow: false
                 };
  }

  componentDidMount() {
    window.addEventListener('clickedProduct', event => {
      let product = event.detail;
      if (product) {
        axios.get(`http://3.19.59.208/item?productId=${product}`)
          .then(dbResult => {
            this.setState({ currentItem: dbResult.data[0],
                            currentPrice: dbResult.data[0]['Price'],
                            currentSeller: dbResult.data[0]['SoldBy'],
                            select: '',
                            quantity: 0
                          })
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  openCloseModal(bool) {
    if (bool === true) {
      this.setState({buyNow: true});
    } else if (bool === false) {
      this.setState({buyNow: false});
    }
  }

  changeQuantity(value) {
    this.setState({ quantity: value,
                    select: value });
  }

  cartSubmit(quantity) {
    const event = new CustomEvent('addToCart', { detail: quantity });
    window.dispatchEvent(event);
    this.setState({ quantity: 1,
                    select: '' });
  }

  render() {
    return (
      <div>
      <Price price={this.state.currentPrice} />
      <Purchase
        seller={this.state.currentSeller}
        openCloseModal={this.openCloseModal.bind(this)}
        changeQuantity={this.changeQuantity.bind(this)}
        cartSubmit={this.cartSubmit.bind(this)}
        select={this.state.select}
        quantity={this.state.quantity} />
      <ListShare openCloseModal={this.openCloseModal.bind(this)}/>
      {this.state.buyNow && ReactDOM.createPortal(<BuyNow
        currentPrice={this.state.currentPrice}
        openCloseModal={this.openCloseModal.bind(this)}/>, document.getElementById('cart-modal'))}
      </div>
    );
  }
}

export default App;