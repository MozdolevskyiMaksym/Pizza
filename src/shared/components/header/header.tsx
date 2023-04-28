import React from 'react';
import { Link } from 'react-router-dom';

import useHeader from './use-header';
import Auth from '../auth/auth';
import BasketSidebar from '../basket-sidebar/basket-sidebar';
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
    <React.Fragment>
      <header className={headerNameClass}>
        <Link to="/" className="header__logo">
          <img className="header__logo-icon" src={logoIcon} alt="Logo" />
        </Link>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            {tabs.map((tab) => (
              <li className="header__navigation-list-item" key={tab.name}>
                <Link
                  to={tab.path}
                  className="header__navigation-list-item--link"
                  onClick={closeBasketModal}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__tools">
          <Link to="/discounts-page" className="header__tools-discount">
            Акції
          </Link>
          <ButtonComponent
            onClick={openModal}
            buttonName="Вхід"
            buttonType="button"
          />
          <div onClick={openBasketModal} className="header__tools-basket">
            <img
              className="header__tools-basket-icon"
              src={basketIcon}
              alt=""
            />
            <span className="header__tools-basket-quantity">
              {basketDataItems.length}
            </span>
            КОШИК
          </div>
        </div>
      </header>
      <Auth closeModal={closeModal} isOpen={isModalOpen} />
      <BasketSidebar />
    </React.Fragment>
  );
};

export default Header;
