import React, { Component } from 'react';
import '../styles/main.scss';

import Avatar1 from '../image/avatar1.png';

export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div>
          <h4>Card's</h4>
        </div>
        <div className="card-grid-container">
          <div className="card-helper-container">
            <div className="card-one-container">
              <div className="card-image-one-container">
                <img src={Avatar1} />
              </div>
              <div className="card-one-list-container">
                <ul>
                  <li><p>Logo</p></li>
                  <li><p>Logo</p></li>
                  <li><p>Logo</p></li>
                  <li><p>Logo</p></li>
                </ul>
              </div>
              <div className="card-one-summary">
                <p>
                  Specify the width first, then height. Height is optional: if no height is specified, your placeholder image will be a square. So this example…
                </p>
              </div>
            </div>
          </div>

          <div className="card-helper-container">
            <div className="card-two-container">
              <div className="card-two-grid-container">
                <div className="card-two-list-container">
                  <ul>
                    <li><p>logo</p></li>
                    <li><p>logo</p></li>
                  </ul>
                </div>
                <div className="card-two-list-container">
                  <div className="card-image-two-container">
                    <ul>
                      <img src={Avatar1} />
                    </ul>
                  </div>
                </div>
                <div className="card-two-list-container">
                  <ul>
                    <li><p>logo</p></li>
                    <li><p>logo</p></li>
                  </ul>
                </div>
              </div>
              <div className="card-two-summary">
                <p>
                  Specify the width first, then height. Height is optional: if no height is specified, your placeholder image will be a square. So this example…
                </p>
              </div>
            </div>
          </div>

          <div className="card-helper-container">
            <div className="card-three-container">
              <div>
                <p>image</p>
              </div>
              <div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div>
                <p>
                  Specify the width first, then height. Height is optional: if no height is specified, your placeholder image will be a square. So this example…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
