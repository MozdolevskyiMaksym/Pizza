import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/use-actions';
import BasketForm from '../basket-form/basket-form';
import { closeBasketModalStatus } from '../../../redux/actions/basket-actions';
import { AppStateType } from '../../types/app-state-type';

import './basket-sidebar.scss';

const BasketSidebar = () => {
  const isOpenBasketOpen = useSelector(
    (state: AppStateType) => state?.basket?.isBasketSidebarOpen
  );
  const basketDataItems = useSelector(
    (state: AppStateType) => state.basket.basketData
  );

  const closeBasketModal = useActions(closeBasketModalStatus);

  const initialCount = 0;
  const sum: number = basketDataItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialCount
  );

  return (
    <div className={`basket-sidebar ${isOpenBasketOpen ? 'sidebar-open' : ''}`}>
      <div onClick={closeBasketModal} className="basket-sidebar__overlay"></div>
      <div className="basket-sidebar__content">
        <h5 className="basket-sidebar__content-heading">Ваше замовлення:</h5>

        <BasketForm />
        {sum !== 0 ? (
          <Link onClick={closeBasketModal} to="order">
            Перейти до замовлення
          </Link>
        ) : (
          <p>Корзина порожня</p>
        )}
      </div>
    </div>
  );
};

export default BasketSidebar;
