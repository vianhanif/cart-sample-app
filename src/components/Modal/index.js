import React, { Component } from 'react';
import './style.scss'

class Modal extends Component {
  state = {  }
  render() { 
    return (
      <div onClick={() => this.props.onClick()} className={`modal${this.props.active ? '--active' : ''}`}>
        <div className="modal-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
 
export default Modal;