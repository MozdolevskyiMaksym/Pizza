import React, { Component } from 'react';
import './animated-grid-table.scss';

class AnimatedGridTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowQuantity: 25,
    };
  }

  render() {
    const { rowQuantity } = this.state;

    return (
      <div className="GridTable">
        {Array.from({ length: rowQuantity }, (_, index) => (
          <div className="GridTable-row" key={index}>
            <div className="GridTable-cell">1</div>
            <div className="GridTable-cell">2</div>
            <div className="GridTable-cell">3</div>
            <div className="GridTable-cell">4</div>
            <div className="GridTable-cell">5</div>
          </div>
        ))}
      </div>
    );
  }
}

export default AnimatedGridTable;
