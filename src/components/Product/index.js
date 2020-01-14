import React, { Component } from 'react'
import { toCurrency } from '../../modules/currency'
import './style.scss'

class Product extends Component {
  state = {  }
  
  render() { 
    return (
    <div className="product" {...this.props}>
      <label className="product-name">{this.props.name}</label>
      <div className="product-image"><img src={this.props.image} alt=""/></div>
      <label className="product-price">{toCurrency(this.props.price)}</label>
    </div>
    );
  }
}
 
export default Product;