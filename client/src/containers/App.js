import React, { Component } from 'react';
import getCategories from '../api';
import logo from '../assets/logo.svg';
import './App.css';
import Navbar from '../components/Navbar';

class App extends Component {
  state = {};

  componentWillMount() {
    getCategories().then((categories) => {
      this.setState({ categories });
      console.log('====================================');
      console.log('categories:', categories);
      console.log('====================================');
      console.log('====================================');
      console.log('state - categories:', this.state.categories);
      console.log('====================================');
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
