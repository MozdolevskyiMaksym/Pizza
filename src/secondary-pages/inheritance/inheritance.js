import React, { Component } from 'react';
import './inheritance.scss';

class BaseComponent extends Component {
  #privateField;

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.#privateField = 'Private field value';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  get privateField() {
    return this.#privateField;
  }

  render() {
    return (
      <div className="base-component">
        <h1>Base Component</h1>
        <p>Count: {this.state.count}</p>
        <p>Private field: {this.privateField}</p>
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
        <p>Private field: {this.privateField}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default DerivedComponent;

// В данном компоненте мы используем наследование, где DerivedComponent наследуется от BaseComponent.
// BaseComponent определяет логику компонента, а DerivedComponent наследует эту логику и добавляет свою собственную.
