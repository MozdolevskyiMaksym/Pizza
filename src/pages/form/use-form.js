/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { emailRegexp, nameRegexp } from '../../utils/regex';

const useForm = () => {
  const [formData, setFormData] = useState(() => {
    // Ищем данные в localStorage и возвращаем их если они есть
    const storedData = localStorage.getItem('formData');
    console.log('storedData: ', storedData);
    return storedData
      ? JSON.parse(storedData)
      : {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          advancedSearch: false, // флаг для расширенного поиска
          dateCreated: '',
        };
  });

  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (event) => {
    const { value, dataset } = event.target;
    const { name } = dataset;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
      dateCreated: '',
    });
  };

  const { firstName, lastName, email, password } = formData;

  // Validation checks
  const isEmailValid = emailRegexp.test(email);
  const isFirstNameValid = nameRegexp.test(firstName);
  const isLastNameValid = nameRegexp.test(lastName);

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
  return {
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
  };
};

export default useForm;
