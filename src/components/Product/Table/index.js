import React, { Component } from 'react';
import { toCurrency } from '../../../modules/currency'
import './style.scss'

class Table extends Component {
  state = {  }
  render() { 
    return (
      <div className="table-container">
        <table className="table-body">
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Price</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, i) => {
              return (
                <tr className="table-row" key={i}>
                  <td>{item.product.name}</td>
                  <td>{toCurrency(item.product.price)}</td>
                  <td className="center">{item.count}</td>
                  <td>{toCurrency(item.count * item.product.price)}</td>
                </tr>
              )
            })}
            <tr>
              <td colSpan="3" className="caption">SubTotal</td>
              <td className="caption">{this.props.subtotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Table;