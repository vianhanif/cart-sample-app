import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, toggleDetail } from '../../stores/cart/actions'
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div className="App">
        {this.props.cart.showDetail ? 
          <div>
          <ul>
            {
              this.props.cart.items.map((item, i) => 
              <li key={i}>
                {item.product.name} {item.product.price * item.count}
              </li>)
            }
          </ul>
        </div> : null}
        <Link to="/admin/products/add">Add Products</Link>
        <ul>
          {
            this.props.product.items.map((item, i) => 
            <li key={i}>
              {item.name} {item.stock}
              <button onClick={()=>{this.props.addToCart(item)}}>Add</button>
            </li>)
          }
        </ul>
        <label>Cart</label>
        <ul>
          {
            this.props.cart.items.map((item, i) => 
            <li key={i}>
              {item.product.name} {item.product.price * item.count}
            </li>)
          }
        </ul>
        <button onClick={()=> this.props.toggleDetail()}>Detail</button>
      </div>
    );
  }
}


export default connect(
  state => ({ ...state }),
  {addToCart, toggleDetail}
)(Home)
