import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './style.scss'

const duration = 100

class InputForm extends Component {
  state = { active: false }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({active: true})
    }, duration)
  }

  render() { 
    return (
      <CSSTransition in={this.state.active} timeout={duration} classNames="form">
        <div className="form form-container">
          {this.props.children}
        </div>
      </CSSTransition>
    );
  }
}
 
export default InputForm;