/* eslint-disable no-unused-vars */
/* eslint-disable security/detect-non-literal-require */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/use-actions';
import {
  closeBasketModalStatus,
  deleteProductFromBasket,
} from '../../../redux/actions/basket-actions';
import { PizzaType } from '../../../pages/pizza/types';
import { SalatType } from '../../../pages/salats/types';
import { DrinkType } from '../../../pages/drinks/types';

import './basket-form-card.scss';

export type BasketFormCardPropsType = {
  item: PizzaType | SalatType | DrinkType;
  getUpdatedSum: (arg0: number, arg1: string) => void;
};

const BasketFormCard = ({ item, getUpdatedSum }: BasketFormCardPropsType) => {
  const { type, id, imgPath, title, price } = item;
  const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

  const [removeProductFromBasket, closeBasketModal] = useActions([
    deleteProductFromBasket,
    closeBasketModalStatus,
  ]);

  const deleteFromBasket = () => {
    removeProductFromBasket(item);
  };

  const moveToDetailPizza = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    type !== 'pizza' && event.preventDefault();
    closeBasketModal();
  };

  const [value, setValue] = useState(1);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedPrice: number = parseInt(event.target.value) * price;
    setValue(parseInt(event.target.value));
    setUpdatedPrice(updatedPrice);
    getUpdatedSum(updatedPrice, id);
  };

  return (
    <div className="basket-item">
      <Link onClick={moveToDetailPizza} to={dynamicPath}>
        <img src={require(`../../assets/images/${imgPath}`)} alt="img" />
      </Link>
      <div className="product-info">
        <div className="product-info__name">{title}</div>
        <div className="product-info__description">
          {(item as PizzaType | SalatType)?.description}
        </div>
      </div>
      <div className="product-price-info">
        <div className="counts">
          <label>Кількість {value}</label>
          <select value={value} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="product-price">{updatedPrice} грн</div>
        <div className="remove-item" onClick={() => deleteFromBasket()}>
          Видалити
        </div>
      </div>
    </div>
  );
};

export default BasketFormCard;
