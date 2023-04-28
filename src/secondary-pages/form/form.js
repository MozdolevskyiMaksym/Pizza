import React from 'react';
import useForm from './use-form';

import './form.scss';

const FormPage = () => {
  const {
    email,
    formData,
    password,
    lastName,
    firstName,
    isEmailValid,
    invalidStyle,
    isLastNameValid,
    isFirstNameValid,
    isSubmitDisabled,
    setFormData,
    handleSubmit,
    handleInputChange,
  } = useForm();

  // enctype - указывает тип кодирования, используемый для отправки данных формы, который может быть application/x-www-form-urlencoded,
  // multipart/form-data, или text/plain. Например, если вы хотите отправить файлы с помощью этой формы,
  // вы можете установить этот атрибут в multipart/form-data:

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        encType="multipart/form-data"
      >
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
