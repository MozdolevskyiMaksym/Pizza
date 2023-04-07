import React from 'react';

import usePizzaPage from './use-pizza';
import PizzaFilter from './components/pizza-filter/pizza-filter';
import Card from '../../shared/components/card/card';

import './pizza.scss';

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

  return (
    <div className="pizza-catalog">
      <div className="pizza-catalog-title">
        <h1>Pizza Title</h1>
      </div>

      <PizzaFilter onSortPizza={onSortPizza} />
      <div className="pizza-catalog-content">{renderCard()}</div>
    </div>
  );
};

export default PizzaPage;
