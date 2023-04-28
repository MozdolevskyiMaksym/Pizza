/* eslint-disable no-console */
import React, { Component } from 'react';
import './animation.scss';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { animating: false, count: 0 };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  componentDidMount() {
    console.log('Animation component mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate nextProps: ', nextProps);
    console.log('shouldComponentUpdate nextState: ', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate prevProps', prevProps);
    console.log('getSnapshotBeforeUpdate prevState', prevState);
    return null;
  }

  componentDidUpdate() {
    console.log('Animation component updated');
  }

  componentWillUnmount() {
    console.log('Animation component will unmount');
  }

  handleButtonClick() {
    this.setState({ animating: true });
    setTimeout(() => this.setState({ animating: false }), 3000);
  }
  onIncreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    const { animating, count } = this.state;
    return (
      <div className="animations-container">
        <div className="animation">
          <div className="animation-box">
            <div className="animation-box__circle"></div>
          </div>
          <div className="text">ROTATION!</div>
        </div>
        <div className="animated-component">
          <button onClick={this.handleButtonClick}>
            {animating ? 'Animating...' : 'Animate me!'}
          </button>
          <div className={`animated-box ${animating ? 'animate' : ''}`}></div>
        </div>
        <div>
          <p>Count: {count}</p>
          <button onClick={this.onIncreaseCount}>Increment Count</button>
        </div>
      </div>
    );
  }
}

export default Animation;
