import { useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/use-actions';

import useScrollHandler from '../../hooks/use-scroll-handler';
import {
  closeBasketModalStatus,
  openBasketModalStatus,
} from '../../../redux/actions/basket-actions';

const useHeader = () => {
  const headerNameClass = `header ${useScrollHandler()}`;
  const basketDataItems = useSelector((state) => state.basket.basketData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openBasketModal = useActions(openBasketModalStatus);
  const closeBasketModal = useActions(closeBasketModalStatus);

  const tabs = [
    { name: 'Піца', path: '/' },
    { name: 'Form', path: '/form' },
    { name: 'Loop control', path: '/loop-control' },
    { name: 'Components', path: '/components' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    tabs,
    headerNameClass,
    basketDataItems,
    openModal,
    closeModal,
    isModalOpen,
    openBasketModal,
    closeBasketModal,
  };
};

export default useHeader;
