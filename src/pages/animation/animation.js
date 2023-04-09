import React, { Component } from 'react';
import './animation.scss';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { animating: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ animating: true });
    setTimeout(() => this.setState({ animating: false }), 3000);
  }
  render() {
    const { animating } = this.state;
    return (
      <div className="animations-container">
        <div className="animation">
          <div className="box">
            <div className="circle"></div>
          </div>
          <div className="text">ROTATION!</div>
        </div>
        <div className="animated-component">
          <button onClick={this.handleButtonClick}>
            {animating ? 'Animating...' : 'Animate me!'}
          </button>
          <div className={`animated-box ${animating ? 'animate' : ''}`}></div>
        </div>
      </div>
    );
  }
}

export default Animation;
