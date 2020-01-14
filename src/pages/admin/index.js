import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.scss';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect(
  state => ({ ...state }),
)(Admin)
