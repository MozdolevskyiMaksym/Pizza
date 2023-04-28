/* eslint-disable security/detect-non-literal-require */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/use-actions';
import ButtonComponet from '../button/button';
import { addProductToBasket } from '../../../redux/actions/basket-actions';
import { AppStateType } from '../../types/app-state-type';

import './card.scss';
import { PizzaType } from '../../../pages/pizza/types';
import { DrinkType } from '../../../pages/drinks/types';
import { SalatType } from '../../../pages/salats/types';

export type CardPropsType = {
  item: PizzaType | DrinkType | SalatType;
};

const Card = ({ item }: CardPropsType) => {
  const pushProductToBasket = useActions(addProductToBasket);
  const basketDataItems = useSelector(
    (state: AppStateType) => state.basket.basketData
  );

  const { type, id, imgPath, title, price } = item;

  const dynamicPath = type === 'pizza' ? `/pizza-details/${id}` : '';
  const isItemExistInBasket = basketDataItems.find(
    (item: PizzaType | DrinkType | SalatType) => item.id === id
  );

  const addItemToBasket = () => {
    pushProductToBasket(item);
  };

  return (
    <div className="card">
      <Link
        onClick={(e) => type !== 'pizza' && e.preventDefault()}
        to={dynamicPath}
      >
        <div className="card__photo">
          <img src={require(`../../assets/images/${imgPath}`)} alt="" />
        </div>
        <div className="card__info">
          <h2 className="card__name">{title}</h2>
          <p className="card__text">
            {(item as PizzaType | SalatType)?.description}{' '}
          </p>
          <div className="card__info-main">
            {(item as PizzaType)?.type === 'pizza' && (
              <div className="card__properties">
                <span className="card__properties__text">
                  Розмір:{(item as PizzaType)?.size}см;{' '}
                </span>
                <span className="card__properties__text">
                  Вага:{(item as PizzaType)?.weight}г;{' '}
                </span>
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
          buttonType="button"
          onClick={addItemToBasket}
          isDisabled={!!isItemExistInBasket}
        />
      </div>
    </div>
  );
};

export default Card;
