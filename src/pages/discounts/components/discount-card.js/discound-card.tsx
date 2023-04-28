/* eslint-disable security/detect-non-literal-require */
import React from 'react';
import './discount-card.scss';

export type DiscountCardPropsType = {
  imgPath: string;
  title: string;
};

const DiscountCard = ({ imgPath, title }: DiscountCardPropsType) => {
  return (
    <div className="discount-item">
      <img
        className="discount-item__image"
        src={require(`../../../../shared/assets/images/${imgPath}`)}
        alt=""
      />
      <ul className="discount-item__list">
        <li className="discount-item__list-item">{title}</li>
      </ul>
    </div>
  );
};

export default DiscountCard;
