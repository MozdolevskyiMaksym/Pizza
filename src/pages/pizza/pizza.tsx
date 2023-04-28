import React, { lazy, Suspense } from 'react';

import usePizzaPage from './use-pizza';

import './pizza.scss';

export const MyContext = React.createContext({ uniqueId: '1' });

const DynamicPizzaFilter = lazy(
  () => import('./components/pizza-filter/pizza-filter')
);

const PizzaPage = () => {
  const { uniqueId, itemsContent, onSortPizza } = usePizzaPage();

  return (
    <MyContext.Provider value={{ uniqueId }}>
      <div className="pizza-catalog">
        <div className="pizza-catalog-title">
          <h1>Pizza Title</h1>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <DynamicPizzaFilter onSortPizza={onSortPizza} />
        </Suspense>
        <div className="pizza-catalog-content">{itemsContent}</div>
      </div>
    </MyContext.Provider>
  );
};

export default PizzaPage;
