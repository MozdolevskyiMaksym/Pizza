import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useActions from '../../hooks/use-actions';
import { fetchProductToBasket } from '../../../redux/actions/basket-actions';
import BasketFormCard from '../basket-form-card/basket-form-card';

import './basket-form.scss';
import { AppStateType } from '../../types/app-state-type';
import { PizzaType } from '../../../pages/pizza/types';
import { SalatType } from '../../../pages/salats/types';
import { DrinkType } from '../../../pages/drinks/types';

const BasketForm = () => {
  const basketDataItems = useSelector(
    (state: AppStateType) => state.basket.basketData
  );
  const [updatedBasketDataItems, setUpdatedBasketDataItems] =
    useState(basketDataItems);

  const getProducts = useActions(fetchProductToBasket);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const renderSmallCard = () => {
    return basketDataItems.map((item: PizzaType | SalatType | DrinkType) => {
      return (
        <BasketFormCard
          key={item?.id}
          item={item}
          getUpdatedSum={getUpdatedSum}
        />
      );
    });
  };

  useEffect(() => {
    setUpdatedBasketDataItems(basketDataItems);
  }, [basketDataItems]);

  const initialCount = 0;
  const sum: number = updatedBasketDataItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialCount
  );

  const getUpdatedSum = (updatedPrice: number, itemId: string) => {
    const updatedItems = updatedBasketDataItems.map(
      (item: PizzaType | SalatType | DrinkType) => {
        if (item.id === itemId) {
          return { ...item, price: updatedPrice };
        } else {
          return item;
        }
      }
    );
    setUpdatedBasketDataItems(updatedItems);
  };

  return (
    <div className="basket-main">
      <div className="basket-form">{renderSmallCard()}</div>
      <div className="basket-all">
        <div className="total">
          Всього до оплати:
          <span className="total__price">{sum} грн</span>
        </div>
      </div>
    </div>
  );
};

export default BasketForm;
