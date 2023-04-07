/* eslint-disable no-console */
import React, { useState } from 'react';

import './form.scss';

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    advancedSearch: false, // флаг для расширенного поиска
  });

  const handleInputChange = (event) => {
    const { value, dataset } = event.target;
    const { name } = dataset;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('formData: ', formData);

    // Проверяем, используется ли расширенный поиск
    if (formData.advancedSearch) {
      const { dateCreated } = formData;
      // Добавляем данные для расширенного поиска в объект запроса
      const searchParams = new URLSearchParams({
        date_created: dateCreated,
      });

      // Делаем запрос с данными для расширенного поиска
      fetch(`/api/search?${searchParams.toString()}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else {
      // Делаем запрос без данных для расширенного поиска
      fetch('/api/search')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      advancedSearch: false,
    });
  };

  const { firstName, lastName, email, password } = formData;

  // Regex patterns
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // Начинается с одного или более символов латинской заглавной буквы, цифры, точки, подчеркивания, процента или знака плюса: [A-Z0-9._%+-]+
  // За которым следует символ @
  // Затем следует один или более символов латинской заглавной буквы, цифры или точки: [A-Z0-9.-]+
  // Затем следует символ точки и две или более символов латинской заглавной буквы: (\.[A-Z]{2,})$
  // Все буквы регистронезависимые благодаря флагу i в конце.

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  // Начинается с одной или более латинских букв любого регистра: [a-zA-Z]+
  // За которым может следовать один или более символов [',. -], после которых идут одна или более букв [a-zA-Z]+
  // Этот шаблон может повторяться ноль или более раз: (([',. -][a-zA-Z ])?[a-zA-Z]*)*
  // Все буквы регистронезависимые благодаря флагу i в конце.

  // Validation checks
  const isEmailValid = emailRegex.test(email);
  const isFirstNameValid = nameRegex.test(firstName);
  const isLastNameValid = nameRegex.test(lastName);

  // Disable submit button if invalid fields
  const isSubmitDisabled =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !isEmailValid ||
    !isFirstNameValid ||
    !isLastNameValid;

  // Style for invalid fields
  const invalidStyle = {
    borderColor: 'red',
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <label>
            First Name:
            <input
              type="text"
              data-name="firstName"
              style={!isFirstNameValid ? invalidStyle : {}}
              value={firstName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              data-name="email"
              style={!isEmailValid ? invalidStyle : {}}
              type="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-column">
          <label>
            Last Name:
            <input
              data-name="lastName"
              style={!isLastNameValid ? invalidStyle : {}}
              type="text"
              value={lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password:
            <input
              data-name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        {formData.advancedSearch && (
          <div className="form-column">
            <label>
              Date created:
              <input
                data-name="dateCreated"
                type="date"
                value={formData.dateCreated}
                onChange={handleInputChange}
              />
            </label>
          </div>
        )}
        <label>
          <input
            type="checkbox"
            checked={formData.advancedSearch}
            onChange={(event) =>
              setFormData((prevState) => ({
                ...prevState,
                advancedSearch: event.target.checked,
              }))
            }
          />
          Advanced Search
        </label>
        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
