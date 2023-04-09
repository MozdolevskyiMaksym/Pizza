import React, { Component } from 'react';
import './float.scss';

class FloatExample extends Component {
  render() {
    return (
      <div className="float">
        <div className="float-header">Header</div>
        <div className="float-left">
          <div className="float-block">Block 1</div>
          <div className="float-block">Block 2</div>
          <div className="float-block">Block 3</div>
        </div>
        <div className="float-right">
          <div className="float-block">Block 4</div>
          <div className="float-block">Block 5</div>
          <div className="float-block">Block 6</div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default FloatExample;
