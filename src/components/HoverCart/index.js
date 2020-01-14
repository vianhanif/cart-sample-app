import React, { Component } from 'react';
import './style.scss'

class HoverCart extends Component {
  state = {  }
  render() { 
    return (
      <div className={`hovercart-panel${this.props.active ? '--active': ''}`}>
        <div className="hovercart-body">
          <label className="hovercart-caption">{this.props.caption}</label>
          <label className="hovercart-subtitle">{this.props.subtitle}</label>
          <label className="hovercart-title">{this.props.title}</label>
        </div>
        <div className="hovercart-aside">
          <div className="hovercart-button" onClick={this.props.onClick}>Detail</div>
        </div>
      </div>
    );
  }
}
 
export default HoverCart;