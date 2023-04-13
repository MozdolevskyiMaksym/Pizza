import React, { Component } from 'react';
import './inheritance.scss';

class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="base-component">
        <h1>Base Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

class DerivedComponent extends BaseComponent {
  render() {
    return (
      <div className="derived-component">
        <h1>Inheritance component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default DerivedComponent;

// В данном компоненте мы используем наследование, где DerivedComponent наследуется от BaseComponent.
// BaseComponent определяет логику компонента, а DerivedComponent наследует эту логику и добавляет свою собственную.
