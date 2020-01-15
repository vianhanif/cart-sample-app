import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, toggleDetail } from '../../stores/cart/actions'
import Product from '../../components/Product'
import Modal from '../../components/Modal'
import ProductTable from '../../components/Product/Table'
import HoverCart from '../../components/HoverCart'
import BaseLayout from '../../layouts/base'
import { toCurrency } from '../../modules/currency'
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  getCartTotal() {
    return this.props.cart.items.length
  }

  getTotal() {
    let total = 0
    this.props.cart.items.forEach(item => {
      total += item.count * item.product.price
    });
    return toCurrency(total, 'IDR')
  }

  render() { 
    return (
      <div className="page-container">
         <Modal onClick={this.props.toggleDetail} active={this.props.cart.showDetail}>
          <ProductTable items={this.props.cart.items} subtotal={this.getTotal()}/>
        </Modal>
        <div className="page-heading">
          <BaseLayout>
            <Link to="/admin/products/add">Add Product</Link>
          </BaseLayout>
        </div>
        
        <div className="page-body">
          <BaseLayout>
            <div className="product-list-container">
              {
                this.props.product.items.map((item, i) => 
                <Product 
                key={i}
                {...item}
                onClick={()=>{this.props.addToCart(item)}}/>
                )
              }
            </div>
          </BaseLayout>
        </div>
        <div className="page-footer">
          {this.getCartTotal() >= 1 ? 
          <BaseLayout>
            <div className="cart-container">
              <HoverCart 
                  caption={`${this.getCartTotal()} item${this.getCartTotal() > 1 ? 's' : ''}`}
                  title={this.getTotal()}
                  subtitle={`Subtotal`}
                  onClick={()=> this.props.toggleDetail()}/>
            </div>
          </BaseLayout>: null
          }
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({ ...state }),
  {addToCart, toggleDetail}
)(Home)
