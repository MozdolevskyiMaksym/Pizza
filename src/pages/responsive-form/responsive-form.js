import React, { Component } from 'react';
import './responsive-form.scss';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    company: '',
    age: '',
    checkbox: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form__group">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form__group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={this.state.company}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form__group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form__group">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleInputChange}
          />
          <label htmlFor="checkbox">
            I consent to process the personal data
          </label>
        </div>

        <button type="submit" className="form__submit-button">
          Send
        </button>
      </form>
    );
  }
}

export default Form;
