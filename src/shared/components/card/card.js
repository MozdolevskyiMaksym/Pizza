import React from 'react';
import ButtonComponet from '../button/button';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/use-actions';
import { addProductToBasket } from '../../../redux/actions/basket-actions';

import './card.scss';

const Card = (props) => {
  const { type, id, img, title, description, size, weight, price } = props;
  const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

  const pushProductToBasket = useActions(addProductToBasket);

  return (
    <div className="card">
      <Link
        onClick={(e) => type !== 'pizza' && e.preventDefault()}
        to={dynamicPath}
      >
        <div className="card__photo">
          <img src={require(`../../assets/images/${img}`)} alt="" />
        </div>
        <div className="card__info">
          <h2 className="card__name">{title}</h2>
          <p className="card__text">{description} </p>
          <div className="card__info-main">
            {size && weight && (
              <div className="card__properties">
                <span className="card__properties__text">
                  Розмір:{size}см;{' '}
                </span>
                <span className="card__properties__text">Вага:{weight}г; </span>
              </div>
            )}
            <div className="card__price">
              {price} <span>грн</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="card__buy">
        <ButtonComponet
          buttonName="Додати в корзину"
          onClick={() => pushProductToBasket(props)}
        />
      </div>
    </div>
  );
};

export default Card;
