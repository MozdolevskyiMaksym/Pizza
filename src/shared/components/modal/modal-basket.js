import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/use-actions';
import BasketForm from './basket-form';
import { closeBasketModalStatus } from '../../../redux/actions/basket-actions';
import './modal.scss';

const ModalBasket = () => {
  const isOpenBasketOpen = useSelector(
    (state) => state.basket.isModalBasketOpen
  );
  const closeBasketModal = useActions(closeBasketModalStatus);
  const basketDataItems = useSelector((state) => state.basket.basketData);

  let initialCount = 0;
  let sum = basketDataItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialCount
  );

  return (
    <div className={`modal-basket ${isOpenBasketOpen ? 'basket-open' : ''}`}>
      <div onClick={closeBasketModal} className="basket-overlay"></div>
      <div className="basket-container">
        <h5>Ваше замовлення:</h5>

        <BasketForm />
        {sum !== 0 ? (
          <Link onClick={closeBasketModal} to="checkout">
            Перейти до замовлення
          </Link>
        ) : (
          <p>Корзина порожня</p>
        )}
      </div>
    </div>
  );
};

export default ModalBasket;
