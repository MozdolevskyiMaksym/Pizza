import React from 'react';
import './class-component.scss';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this._toggleActiveState();
  }

  render() {
    const { isActive } = this.state;
    const buttonClass = this._getButtonClass();

    return (
      <div className="class-component">
        <button
          className={`class-component__button ${buttonClass}`}
          onClick={this.handleClick}
        >
          {isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    );
  }

  // Public method
  toggleActiveState() {
    this._toggleActiveState();
  }

  // Private method
  _toggleActiveState() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  // Private method
  _getButtonClass() {
    const { isActive } = this.state;
    return isActive ? 'active' : '';
  }
}

export default ClassComponent;
