import React, { Component } from 'react';
import './style.scss'

class Input extends Component {
  state = {value:''}

  handleChange(value) {
    switch(this.props.type) {
      case 'number': {
        let val = value.replace(/,/g, '')
        if (isNaN(val)) {
          val = '0'
        }
        let number = Number(val)
        this.props.onChange(number)
        this.setState({value: number.toLocaleString()})
      }
      break
      default:
        this.props.onChange(value)
        this.setState({value})
    }
  }

  render() { 
    return (
      <div className="input-container">
        <label className="input-label">{this.props.label}</label>
        <input className="input-form" placeholder={this.props.hint} value={this.state.value} type="text" onChange={(e) => this.handleChange(e.target.value)}/>
      </div>
    );
  }
}
 
export default Input;