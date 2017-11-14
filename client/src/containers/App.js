import React, { Component } from 'react';
import { connect } from 'react-redux';
// import getCategories from '../utils/api';
import { fetchCategories } from '../actions/categoryActions';
import logo from '../assets/logo.svg';
import './App.css';
import Navbar from '../components/Navbar';

class App extends Component {
  componentWillMount() {
    this.props.getCategories;
    console.log('====================================');
    console.log('getCategories called');
    console.log('====================================');
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

const mapDispatchToProps = dispatch => ({
  getCategories: dispatch(fetchCategories()),
});

export default connect(null, mapDispatchToProps)(App);
