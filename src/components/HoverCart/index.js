import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './style.scss'

const duration = 100

class HoverCart extends Component {
  state = { active: false }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({active: true})
    }, duration)
  }

  render() { 
    return (
      <CSSTransition in={this.state.active} timeout={duration} classNames="hovercart-panel">
        <div className="hovercart-panel" >
          <div className="hovercart-body">
            <label className="hovercart-caption">{this.props.caption}</label>
            <label className="hovercart-subtitle">{this.props.subtitle}</label>
            <label className="hovercart-title">{this.props.title}</label>
          </div>
          <div className="hovercart-aside">
            <div className="hovercart-button" onClick={this.props.onClick}>Detail</div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
 
export default HoverCart;