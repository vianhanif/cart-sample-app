import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProduct } from '../../stores/product/actions'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import BaseLayout from '../../layouts/base'
import './style.scss';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    }
  }

  isDataValid() {
    return this.state.name === '' || !this.state.price
  }

  handleAddProduct() {
    this.props.addProduct(this.state)
    this.props.history.push("/")
  }

  render() { 
    return (
      <div className="page-container">
        <div className="page-heading">
          <BaseLayout>
            <Link to="/">Home</Link>
          </BaseLayout>
        </div>
        <div className="page-form">
          <div className="form-container">
            <Input label="Name" type="text" onChange={value => this.setState({name: value})}/>
            <Input label="Price" type="number" onChange={value => this.setState({price: value})}/>
            <button disabled={this.isDataValid()} onClick={()=>{this.handleAddProduct()}}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state }),
  { addProduct }
)(Admin)
