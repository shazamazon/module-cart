import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Price from './price.jsx';
import Purchase from './purchase.jsx';
import ListShare from './listshare.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentItem: {"_id":"5d63f92b62a1c90237983dd7","ProductId":1,"Price":17.99,"SoldBy":"Salem"},
                   currentPrice: 17.99,
                   currentSeller: 'Salem'
                 };
  }

  ComponentDidMount() {
    document.addEventListener('clickedProduct', event => {
      let product = event.detail;
      if (product) {
        axios.get(`/item?productId=${ProductId}`)
          .then(data => {
            console.log(data)
            this.setState({ currentItem: data[0],
                            currentPrice: data[0].Price,
                            currentSeller: data[0].SoldBy
                          })
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  render() {
    return (
      <div>
      <Price price={this.state.currentPrice} />
      <Purchase seller={this.state.currentSeller}/>
      <ListShare />
      </div>
    );
  }
}

export default App;