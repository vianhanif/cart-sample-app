import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { toCurrency } from '../../modules/currency'
import './style.scss'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

class Product extends Component {
  state = {
    active: false
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({active: true})
    }, duration)
  }

  render() { 
    return (
    <Transition in={this.state.active} timeout={duration}>
      {state => {
        return (
          <div className="product" {...this.props} style={{...defaultStyle, ...transitionStyles[state]}}>
            <label className="product-name">{this.props.name}</label>
            <div className="product-image"><img src={this.props.image} alt=""/></div>
            <label className="product-price">{toCurrency(this.props.price)}</label>
          </div>
        )
      }}
    </Transition>
    );
  }
}
 
export default Product;