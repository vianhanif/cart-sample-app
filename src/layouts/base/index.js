import React, { Component } from 'react';
import './style.scss'

class BaseLayout extends Component {
  state = {  }
  render() { 
    return (
      <div className="layout-base">
        {this.props.children}
      </div>
    );
  }
}
 
export default BaseLayout;