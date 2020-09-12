import React, { Component } from 'react';
import '../styles/main.scss';
export default class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <h4>Navigation's</h4>
        </div>
        <div className="nav-flex-container">
          <div className="nav-inner-container">
            <ul className="nav-grid-container">
              <li className="nav-home"><p className="home">Home</p></li>
              <li className="nav-project"><p>Project</p></li>
              <li className="nav-blog"><p>Blog</p></li>
              <li className="nav-about"><p>About</p></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
