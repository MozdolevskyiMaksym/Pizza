import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <Link href="/" className="footer-logo">
      <img src={Logo} alt="Logo" />
    </Link>
    <div className="footer-nav">
      <Link to="/discount-page" className="footer-link">
        Акції
      </Link>
      <Link to="/discount-page" className="footer-link">
        Про нас
      </Link>
      <Link to="/discount-page" className="footer-link">
        Умови доставки
      </Link>
      <Link to="/discount-page" className="footer-link">
        Політика конфеденційності
      </Link>
    </div>
    <div className="footer-contact">
      <div>
        <span>Телефон:</span> 38 (093) 112 92 38
      </div>
      <div>
        <span>Адреса:</span>м. Львів, вул. Чорновола 12
      </div>
    </div>
  </footer>
);

export default Footer;
