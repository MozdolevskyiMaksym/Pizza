/* eslint-disable security/detect-non-literal-require */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { ButtonComponent, DrinksSlider } from '../components/UI';

// import { addProductToBasket } from '../../redux/actions/basket-actions';
import useActions from '../../shared/hooks/use-actions';
import { fetchPizza } from '../pizza/actions/actions';
import { fetchDrinks } from '../drinks/actions/actions';
import ButtonComponent from '../../shared/components/button/button';

import './pizza-details.scss';
import { addProductToBasket } from '../../redux/actions/basket-actions';
import { PizzaType } from '../pizza/types';
import { AppStateType } from '../../shared/types/app-state-type';

const PizzaDetails = () => {
  const match = useParams();

  const pizzasData: PizzaType[] = useSelector(
    (state: AppStateType) => state.pizza.data
  );
  const drinksData = useSelector((state: AppStateType) => state.drinks.data);
  const basketDataItems = useSelector(
    (state: AppStateType) => state.basket.basketData
  );

  const [getPizza, getDrink, pushProductToBasket] = useActions([
    fetchPizza,
    fetchDrinks,
    addProductToBasket,
  ]);

  const selectedPizza = pizzasData.find((item) => item.id === match.id);
  const isItemExistInBasket = basketDataItems.find(
    (item) => item.id === selectedPizza?.id
  );

  useEffect(() => {
    if (pizzasData.length === 0) {
      getPizza();
    }
  }, [getPizza, pizzasData]);

  useEffect(() => {
    if (drinksData.length === 0) {
      getDrink();
    }
  }, [getDrink, drinksData]);

  const addItemToBasket = () => {
    pushProductToBasket(selectedPizza);
  };

  return selectedPizza ? (
    <div className="pizza-details">
      <div className="pizza-detail-main">
        <div className="pizza-detail-photo">
          <img
            src={require(`../../shared/assets/images/${selectedPizza?.imgPath}`)}
            alt=""
          />
        </div>
        <div className="pizza-detail-info">
          <h1 className="pizza-detail-name">{selectedPizza.title}</h1>
          <p className="pizza-detail-desc">{selectedPizza.description}</p>
          <div className="pizza-detail-properties">
            <span className="pizza-detail-properties__text">
              Розмір: {selectedPizza.size}см;{' '}
            </span>
            <span className="pizza-detail-properties__text">
              Вага: {selectedPizza.weight}г;{' '}
            </span>
          </div>
          <div className="pizza-detail-properties-price">
            Ціна: <span>{selectedPizza.price} грн</span>
          </div>
          <ButtonComponent
            buttonType="button"
            buttonName="Замовити"
            onClick={addItemToBasket}
            isDisabled={!!isItemExistInBasket}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default PizzaDetails;
