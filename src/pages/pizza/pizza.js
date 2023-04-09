import React from 'react';

import usePizzaPage from './use-pizza';
import PizzaFilter from './components/pizza-filter/pizza-filter';
import Card from '../../shared/components/card/card';

import './pizza.scss';

export const MyContext = React.createContext();

const PizzaPage = () => {
  const { pizzasData, filteredPizzasData, setFilteredPizzasData } =
    usePizzaPage();

  const renderCard = () =>
    filteredPizzasData.map((item) => {
      return (
        <Card
          type={item.type}
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          size={item.size}
          weight={item.weight}
          price={item.price}
        />
      );
    });

  const onSortPizza = (category) => {
    const updatedContent = pizzasData.filter((item) =>
      category === 'All' ? item : item.category === category
    );
    setFilteredPizzasData(updatedContent);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Получаем текущее время и преобразуем его в строку в системе счисления 36
    const randomChars = Math.random().toString(36).substring(2, 8); // Генерируем случайную строку из 6 символов
    const uniqueId = timestamp + randomChars; // Объединяем текущее время и случайную строку, чтобы получить уникальный айди
    return uniqueId;
  };

  const id = generateUniqueId();

  return (
    <MyContext.Provider value={{ id }}>
      <div className="pizza-catalog">
        <div className="pizza-catalog-title">
          <h1>Pizza Title</h1>
        </div>

        <PizzaFilter onSortPizza={onSortPizza} />
        <div className="pizza-catalog-content">{renderCard()}</div>
      </div>
    </MyContext.Provider>
  );
};

export default PizzaPage;
