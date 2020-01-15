import React, { Component, Fragment } from 'react';
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

  isTextArea() {
    return this.props.type === 'textarea'
  }

  isBasicInput() {
    return this.props.type === 'text' || 
    this.props.type === 'number'
  }

  render() { 
    return (
      <div className="input-container">
        {this.isBasicInput() ? <Fragment>
          <label className="input-label">{this.props.label}</label>
          <input className="input-form" placeholder={this.props.hint} value={this.state.value} type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        </Fragment>:null }
        {this.isTextArea() ? <div className="input--big">
          <label className="input-label">{this.props.label}</label>
          <textarea className="input-form" placeholder={this.props.hint} value={this.state.value} type="text" onChange={(e) => this.handleChange(e.target.value)} />
        </div> : null}
      </div>
    );
  }
}
 
export default Input;