import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProduct } from '../../stores/product/actions'
import './style.scss';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    }
  }

  handleAddProduct() {
    this.props.addProduct(this.state)
    this.props.history.push("/")
  }

  render() { 
    return (
      <div className="App">
        <label>Name</label>
        <input type="text" onChange={(e) => this.setState({name: e.target.value})} name="name"/>
        <label>Price</label>
        <input type="number" onChange={(e) => this.setState({price: e.target.value})} name="name"/>
        <button onClick={()=>{this.handleAddProduct()}}>Add</button>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state }),
  { addProduct }
)(Admin)
