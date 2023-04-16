/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
import UsePizzaFilter from './use-pizza-filter';
import { MyContext } from '../../pizza';

import './pizza-filter.scss';

const PizzaFilter = ({ onSortPizza }) => {
  const { tabs, onFilterPizza } = UsePizzaFilter({ onSortPizza });

  return (
    <MyContext.Consumer>
      {({ id }) => (
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
