import React from 'react';
import { Link } from 'react-router-dom';

import useHeader from './use-header';
import ModalComponent from '../modal/modal-component';
import ModalBasket from '../modal/modal-basket';
import ButtonComponent from '../button/button';

import logoIcon from '../../assets/images/logo.svg';
import basketIcon from '../../assets/images/basket.png';

import './header.scss';

const Header = () => {
  const {
    tabs,
    closeModal,
    isModalOpen,
    basketDataItems,
    headerNameClass,
    openBasketModal,
    closeBasketModal,
    openModal,
  } = useHeader();

  return (
    <>
      <header className={headerNameClass}>
        <Link to="/" className="logo">
          <img src={logoIcon} alt="Logo" />
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            {tabs.map((tab) => (
              <li className="nav__item" key={tab.name}>
                <Link
                  to={tab.path}
                  className="nav__link"
                  onClick={closeBasketModal}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-tools">
          <Link to="/discount-page" className="header-link">
            Акції
          </Link>
          <ButtonComponent onClick={openModal} buttonName="Вхід" />
          <div onClick={openBasketModal} className="header-basket">
            <img src={basketIcon} alt="" />
            <span className="header-basket__calck">
              {basketDataItems.length}
            </span>
            КОШИК
          </div>
        </div>
      </header>
      <ModalComponent closeModal={closeModal} isOpen={isModalOpen} />
      <ModalBasket />
    </>
  );
};

export default Header;
