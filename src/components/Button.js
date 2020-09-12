import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <div>
          <h4>Button's</h4>
        </div>
        <div className="button-grid-container">
          <div className="button-one">
            <p><span>Press Me</span></p>
          </div>
          <div className="button-two">
            <p>Press Me</p>
          </div>
          <div className="button-three">
            <p>Press Me</p>
          </div>
          <div className="button-four">
            <p>Press Me</p>
          </div>
          <div className="button-five">
            <p>Press Me</p>
          </div>
          <div className="button-six">
            <p>Press Me</p>
          </div>
        </div>
      </div>
    )
  }
}
