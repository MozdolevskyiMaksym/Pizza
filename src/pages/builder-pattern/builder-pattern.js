import React from 'react';
import './builder-pattern.scss';

class User {
  constructor(firstName, lastName, age, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

class UserBuilder {
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.email = '';
    this.phoneNumber = '';
  }

  withFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  withAge(age) {
    this.age = age;
    return this;
  }

  withEmail(email) {
    this.email = email;
    return this;
  }

  withPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build() {
    return new User(
      this.firstName,
      this.lastName,
      this.age,
      this.email,
      this.phoneNumber
    );
  }
}

const user1 = new UserBuilder()
  .withFirstName('John')
  .withLastName('Doe')
  .withAge(25)
  .withEmail('johndoe@example.com')
  .build();

const user2 = new UserBuilder()
  .withFirstName('Jane')
  .withLastName('Doe')
  .withEmail('janedoe@example.com')
  .build();

const BuilderPattern = () => {
  return (
    <div className="user-container">
      <div className="user">
        <h3>
          {user1.firstName} {user1.lastName}
        </h3>
        <p>Age: {user1.age}</p>
        <p>Email: {user1.email}</p>
        <p>Phone Number: {user1.phoneNumber}</p>
      </div>
      <div className="user">
        <h3>
          {user2.firstName} {user2.lastName}
        </h3>
        <p>Age: {user2.age}</p>
        <p>Email: {user2.email}</p>
        <p>Phone Number: {user2.phoneNumber}</p>
      </div>
    </div>
  );
};

export default BuilderPattern;
