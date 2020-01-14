import React, { Component } from 'react';
import { connect } from 'react-redux'
import { incStock } from '../../stores/product/actions'
import './style.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div className="App">
        <ul>
          {
            this.props.product.items.map((item, i) => 
            <li key={i}>
              {item.name} {item.stock}
              <button onClick={()=>{this.props.incStock(item.id)}}>Add</button>
            </li>)
          }
        </ul>
      </div>
    );
  }
}


export default connect(
  state => ({ ...state }),
  {incStock}
)(Home)
