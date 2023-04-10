/* eslint-disable security/detect-non-literal-require */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/use-actions';
import {
  closeBasketModalStatus,
  deleteProductFromBasket,
} from '../../../redux/actions/basket-actions';
import './modal.scss';

const BasketFormCard = (props) => {
  const { type, id, img, title, description, price, getUpdatedSum } = props;
  const dynamicPath = type === 'pizza' ? `/detail-pizza/${id}` : '';

  const removeProductFromBasket = useActions(deleteProductFromBasket);
  const closeBasketModal = useActions(closeBasketModalStatus);

  const deleteFromBasket = () => {
    removeProductFromBasket(props);
  };

  const moveToDetailPizza = (e) => {
    type !== 'pizza' && e.preventDefault();
    closeBasketModal();
  };

  const [value, setValue] = useState(1);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleChange = (e) => {
    const updatedPrice = e.target.value * price;
    setValue(e.target.value);
    setUpdatedPrice(updatedPrice);
    getUpdatedSum(updatedPrice, id);
  };

  return (
    <div className="basket-item">
      <Link onClick={moveToDetailPizza} to={dynamicPath}>
        <img src={require(`../../assets/images/${img}`)} alt="img" />
      </Link>
      <div className="product-info">
        <div className="product-info__name">{title}</div>
        <div className="product-info__description">{description}</div>
      </div>
      <div className="product-price-info">
        <div className="counts">
          <label>Кількість {value}</label>
          <select value={value} onChange={handleChange}>
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="product-price">{updatedPrice} грн</div>
        <div className="remove-item" onClick={() => deleteFromBasket(props)}>
          Видалити
        </div>
      </div>
    </div>
  );
};

export default BasketFormCard;
