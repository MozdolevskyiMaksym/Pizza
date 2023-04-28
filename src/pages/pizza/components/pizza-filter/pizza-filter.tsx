/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import usePizzaFilter from './use-pizza-filter';
import { MyContext } from '../../pizza';

import './pizza-filter.scss';

export type PizzaFilterPropsType = {
  onSortPizza: (category: string) => void;
};

const PizzaFilter = ({ onSortPizza }: PizzaFilterPropsType) => {
  const { tabs, onFilterPizza } = usePizzaFilter({ onSortPizza });

  return (
    <MyContext.Consumer>
      {({ uniqueId }) => (
        <ul className="filter-container">
          {tabs.map((tab) => (
            <li
              onClick={() => onFilterPizza(tab.category)}
              key={tab.id}
              className={`${tab.status ? 'active' : ''} filter-item`}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      )}
    </MyContext.Consumer>
  );
};

export default PizzaFilter;
