import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Price from './Price.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentProduct: '' };
  }

  render() {
    return (
      <Price />

    )
  }
}

export default App;