import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addProduct } from '../../stores/product/actions'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import BaseLayout from '../../layouts/base'
import InputForm from '../../components/Input/Form'
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
          <BaseLayout>
            <InputForm>
              <Input label="Name" hint="Ayam Goreng" type="text" onChange={value => this.setState({name: value})}/>
              <Input label="Price" hint="Rp 30.000,00" type="number" onChange={value => this.setState({price: value})}/>
              <Input label="Description" hint="Paket Nasi dengan ayam goreng pedas" type="textarea" onChange={value => this.setState({price: value})}/>
              <button disabled={this.isDataValid()} onClick={()=>{this.handleAddProduct()}}>Add</button>
            </InputForm>
          </BaseLayout>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ ...state }),
  { addProduct }
)(Admin)
