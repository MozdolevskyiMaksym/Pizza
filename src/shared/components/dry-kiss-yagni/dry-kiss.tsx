// First example (without refactoring)
import React, { ChangeEvent, useState, FormEvent } from 'react';

export const DryKiss = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const DryKiss2 = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const inputs = [
    { name: 'firstName', labelName: 'First Name', type: 'text' },
    { name: 'lastName', labelName: 'Last Name', type: 'text' },
    { name: 'email', labelName: 'Email', type: 'email' },
  ];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit form data to API
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs?.map((input) => (
        <div key={input?.name}>
          <label htmlFor={input?.name}>{input?.labelName}</label>
          <input
            id={input?.name}
            type={input?.type}
            name={input?.name}
            value={formValues[input?.name as keyof FormValues]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};
