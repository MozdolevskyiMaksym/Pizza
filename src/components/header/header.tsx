import React from 'react';

import LogoIcon from '../../shared/assets/images/logo.svg';
import BasketIcon from '../../shared/assets/images/basket.png';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={LogoIcon} alt="Logo" />
      </a>
      <div className="header__tools" data-testid="tools">
        <a href="/" className="header__tools-promotion">
          Акції
        </a>
        <button>Вхід</button>
        <div className="header__tools-basket">
          <img src={BasketIcon} alt="" />
          КОШИК
        </div>
      </div>
    </header>
  );
};

export default Header;
