import axios from 'axios';

// Добавление интерсептора для запроса
axios.interceptors.request.use(
  (config) => {
    // добавляем заголовок с токеном авторизации
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// добавляем интерспетор для ответов
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // если ответ сервера - ошибка 401, то выходим из системы
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// В этом примере мы добавляем интерсептор для запросов, который проверяет наличие токена авторизации в локальном хранилище и добавляет его в заголовок запроса.
// Также мы добавляем интерсептор для ответов, который обрабатывает ошибку авторизации (ошибка 401) и перенаправляет пользователя на страницу входа.

// Интерсепторы - это мощный инструмент для обработки запросов и ответов в React-приложениях, который может помочь упростить код и улучшить пользовательский опыт.
