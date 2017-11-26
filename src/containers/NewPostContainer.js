import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPostContainer extends Component {
  state = {};
  render() {
    return <div>New post form here.</div>;
  }
}

export default connect(null)(NewPostContainer);
