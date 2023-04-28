import React, { Component } from 'react';
import './transforms-transitions.scss';

class TransformsAndTransitions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTilted: false,
      isRotated: false,
      isZoomed: false,
      isTransitioning: false,
    };
  }

  toggleTilt = () => {
    this.setState((prevState) => ({
      isTilted: !prevState.isTilted,
    }));
  };

  toggleRotate = () => {
    this.setState((prevState) => ({
      isRotated: !prevState.isRotated,
    }));
  };

  toggleZoom = () => {
    this.setState((prevState) => ({
      isZoomed: !prevState.isZoomed,
    }));
  };

  toggleTransition = () => {
    this.setState((prevState) => ({
      isTransitioning: !prevState.isTransitioning,
    }));
  };

  render() {
    const { isTilted, isRotated, isZoomed, isTransitioning } = this.state;

    return (
      <div className="transforms-transitions-container">
        <div
          className={`box ${isTilted ? 'tilted' : ''} ${
            isRotated ? 'rotated' : ''
          } ${isZoomed ? 'zoomed' : ''} ${
            isTransitioning ? 'transitioning' : ''
          }`}
          onClick={this.toggleTilt}
        >
          Click me!
        </div>
        <button className="button" onClick={this.toggleRotate}>
          Toggle rotation
        </button>
        <button className="button" onClick={this.toggleZoom}>
          Toggle zoom
        </button>
        <button className="button" onClick={this.toggleTransition}>
          Toggle transition
        </button>
      </div>
    );
  }
}

export default TransformsAndTransitions;
