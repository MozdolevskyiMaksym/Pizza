// First example (without refactoring)
import React, { useState } from 'react';

export const DryKiss = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Refactoring

export const DryKiss2 = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const inputs = [
    { name: 'firstName', labelName: 'First Name', type: 'text' },
    { name: 'lastName', labelName: 'Last Name', type: 'text' },
    { name: 'email', labelName: 'Email', type: 'email' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to API
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs?.map((input) => (
        <div key={input?.name}>
          <label htmlFor={input?.id}>{input?.labelName}</label>
          <input
            id={input?.name}
            type={input?.type}
            name={input?.name}
            value={formValues[input?.name]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
