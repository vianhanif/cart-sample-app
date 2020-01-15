import React, { Component } from 'react';
import './style.scss'

class Input extends Component {
  state = {}

  render() { 
    return (
      <div className="input-container">
        <label className="input-label">{this.props.label}</label>
        <input className="input-form" placeholder={this.props.hint} value={this.state.value} type={this.props.type} onChange={(e) => this.props.onChange(e.target.value)}/>
      </div>
    );
  }
}
 
export default Input;