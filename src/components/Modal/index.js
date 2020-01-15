import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './style.scss'

const duration = 100

class Modal extends Component {
  state = { }

  render() { 
    return (
      <CSSTransition in={this.props.active} unmountOnExit timeout={duration} classNames="modal">
        <div onClick={() => this.props.onClick()} className="modal">
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
 
export default Modal;