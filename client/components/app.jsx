import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Price from './Price.jsx';
import Purchase from './Purchase.jsx';

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
      </div>
    );
  }
}

export default App;