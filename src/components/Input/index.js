import React, { Component } from 'react';
import './style.scss'

class Input extends Component {
  state = {  }
  render() { 
    return (
      <div className="input-container">
        <label className="input-label">{this.props.label}</label>
        <input className="input-form" type={this.props.type} onChange={(e) => this.props.onChange(e.target.value)}/>
      </div>
    );
  }
}
 
export default Input;