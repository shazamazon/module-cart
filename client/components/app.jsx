import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Price from './price.jsx';
import Purchase from './purchase.jsx';
import ListShare from './listshare.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentProduct: '' };
  }

  render() {
    return (
      <div>
      <Price />
      <Purchase />
      <ListShare />
      </div>
    );
  }
}

export default App;