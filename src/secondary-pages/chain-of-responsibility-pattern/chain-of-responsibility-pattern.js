import React, { useState } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { CiWarning } from 'react-icons/ci';
import { MdDoneOutline } from 'react-icons/md';
import './chain-of-responsibility-pattern.scss';

const ChainOfResponsibilityPattern = () => {
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    showMessage(message);
  };

  const showMessage = (msg) => {
    if (msg.length <= 5) {
      showSuccessToast();
    } else if (msg.length > 5 && msg.length <= 10) {
      showWarningToast();
    } else {
      showErrorToast();
    }
  };

  const showSuccessToast = () => {
    setShowToast('success');
  };

  const showWarningToast = () => {
    setShowToast('warning');
  };

  const showErrorToast = () => {
    setShowToast('error');
  };

  return (
    <div className="chain-of-resp">
      <h2>Chain of Responsibility Example</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Show Message</button>
      </form>
      <div
        className={`toast ${showToast ? 'show' : 'hide'} ${showToast}`}
        onAnimationEnd={() => setShowToast(false)}
      >
        {showToast === 'success' && (
          <span className="material-icons">
            <MdDoneOutline />
          </span>
        )}
        {showToast === 'warning' && (
          <span className="material-icons">
            <CiWarning />
          </span>
        )}
        {showToast === 'error' && (
          <span className="material-icons">
            <BiErrorAlt />
          </span>
        )}
        {showToast === 'success' && <p>Success!</p>}
        {showToast === 'warning' && <p>Warning!</p>}
        {showToast === 'error' && <p>Error!</p>}
      </div>
    </div>
  );
};

export default ChainOfResponsibilityPattern;

// Компонент ChainOfResponsibilityPattern представляет собой простой пример паттерна проектирования "Цепочка обязанностей" (Chain of Responsibility).

// Основная идея этого паттерна заключается в том, что каждый объект в цепочке может обработать запрос, передав его дальше по цепи, пока запрос не будет обработан.
// Таким образом, каждый объект в цепочке имеет возможность обработать запрос самостоятельно или передать его дальше по цепи.

// В данном примере компонент ChainOfResponsibilityPattern имеет форму, в которой пользователь может ввести сообщение и отправить его на обработку.
// Компонент проверяет длину сообщения и выбирает, какой тип уведомления нужно отобразить: success, warning или error.
// Каждый тип уведомления отображается с помощью анимации "плавное появление и исчезновение",
// Изображение наиболее подходящего типа уведомления - это пример использования паттерна "Цепочка обязанностей".
// Компонент ChainOfResponsibilityPattern может быть расширен и изменен для обработки более сложных запросов, где каждый шаг в цепочке представляет отдельный этап обработки запроса.
