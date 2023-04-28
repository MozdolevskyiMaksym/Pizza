import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from '../../shared/hooks/use-actions';
import { fetchPizza } from './actions/actions';
import Card from '../../shared/components/card/card';
import { PizzaType } from './types';
import { AppStateType } from '../../shared/types/app-state-type';

const usePizzaPage = () => {
  // const [state, dispatch] = useReducer(pizzaReducer, initialState);
  // const { data: pizzasData } = state;
  const pizzasData = useSelector((state: AppStateType) => state?.pizza?.data);

  const [filteredPizzaData, setFilteredPizzaData] =
    useState<PizzaType[]>(pizzasData);

  const getPizza = useActions(fetchPizza);

  useEffect(() => {
    getPizza();
  }, [getPizza]);

  useEffect(() => {
    pizzasData && pizzasData.length > 0 && setFilteredPizzaData(pizzasData);
  }, [pizzasData]);

  const onSortPizza = (category: string) => {
    const updatedContent = pizzasData?.filter((item: PizzaType) =>
      category === 'All' ? item : item.category === category
    );
    setFilteredPizzaData(updatedContent);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Получаем текущее время и преобразуем его в строку в системе счисления 36
    const randomChars = Math.random().toString(36).substring(2, 8); // Генерируем случайную строку из 6 символов
    const uniqueId = timestamp + randomChars; // Объединяем текущее время и случайную строку, чтобы получить уникальный айди
    return uniqueId;
  };

  const uniqueId = generateUniqueId();

  const itemsContent = useMemo(
    () =>
      filteredPizzaData?.map((item: PizzaType) => (
        <Card item={item} key={item?.id as string} />
      )),
    [filteredPizzaData]
  );

  return {
    uniqueId,
    itemsContent,
    onSortPizza,
  };
};

export default usePizzaPage;
