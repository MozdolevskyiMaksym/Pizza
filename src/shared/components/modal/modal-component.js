import React from 'react';
import { useState } from 'react';
import ButtonComponent from '../button/button';
import Input from '../input/input';

import './modal.scss';

const ModalComponent = ({ isOpen, closeModal }) => {
  const [formLogin, setFormLogin] = useState('active');
  const [formRegister, setFormRegister] = useState('');
  const [formReset, setFormReset] = useState('');

  const showRegister = () => {
    if (formRegister === '' && formLogin === 'active') {
      setFormLogin('');
      setFormRegister('active');
    } else {
      setFormLogin('active');
      setFormRegister('');
    }
  };
  const showReset = () => {
    if (formReset === '' && formLogin === 'active') {
      setFormLogin('');
      setFormReset('active');
    } else {
      setFormLogin('active');
      setFormReset('');
    }
  };
  const showLogin = () => {
    if (formReset === 'active' || formRegister === 'active') {
      setFormReset('');
      setFormRegister('');
      setFormLogin('active');
    } else {
      setFormLogin('');
      setFormRegister('');
      setFormReset('');
    }
  };

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div onClick={closeModal} className="overlay"></div>
      <form
        action=""
        id="modal-login"
        className={`modal-form ${formLogin ? 'active' : ''}`}
      >
        <div onClick={closeModal} className="close-btn"></div>
        <h3>Вхід</h3>
        <div className="register">
          У вас ще немає акаунту?{' '}
          <span onClick={showRegister} className="link">
            Зареєструйтесь
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="login" className="label">
            Електронна пошта
          </label>
          <Input inputType="email" inputName="login" />
        </div>
        <div className="form-group">
          <label htmlFor="pass" className="label">
            Пароль
          </label>
          <Input inputType="password" inputName="pass" />
        </div>

        <ButtonComponent buttonType="submit" buttonName="Вхід" />

        <div className="form-login-bottom">
          <span onClick={showReset}>Забули пароль</span>
          <div className="save-data">
            Залишатись в мережі
            <label htmlFor="" className="checkbox-container">
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </form>
      <form
        action=""
        id="modal-register"
        className={`modal-form ${formRegister ? 'active' : ''}`}
      >
        <div onClick={closeModal} className="close-btn"></div>
        <h3>Реєстрація</h3>
        <div className="register">
          У вас вже є акаунту?{' '}
          <span onClick={showLogin} className="link">
            Увійти
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Ваше ім`я
          </label>
          <Input inputType="text" inputName="name" />
        </div>
        <div className="form-group">
          <label htmlFor="login" className="label">
            Електронна пошта
          </label>
          <Input inputType="email" inputName="login" />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Телефон
          </label>
          <Input inputType="number" inputName="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">
            Дата народження
          </label>
          <Input inputType="date" inputName="birthday" />
        </div>
        <div className="form-group">
          <label htmlFor="pass" className="label">
            Пароль
          </label>
          <Input inputType="password" inputName="pass" />
        </div>

        <ButtonComponent buttonType="submit" buttonName="Зареєструватись" />
      </form>
      <form
        action=""
        id="modal-reset"
        className={`modal-form ${formReset ? 'active' : ''}`}
      >
        <div onClick={closeModal} className="close-btn"></div>
        <h3>Відновлення паролю</h3>
        <div className="register">
          Згадали пароль?{' '}
          <span onClick={showLogin} className="link">
            Увійти
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="login" className="label">
            Електронна пошта
          </label>
          <Input inputType="email" inputName="login" />
        </div>

        <ButtonComponent buttonType="submit" buttonName="Відновити" />
      </form>
    </div>
  );
};

export default ModalComponent;
