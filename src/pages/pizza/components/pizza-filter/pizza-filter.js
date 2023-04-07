import React from 'react';
import UsePizzaFilter from './use-pizza-filter';

import './pizza-filter.scss';

const PizzaFilter = ({ onSortPizza }) => {
  const { tabs, onFilterPizza } = UsePizzaFilter({ onSortPizza });

  return (
    <div className="filter-container">
      {tabs.map((tab) => (
        <li
          onClick={() => onFilterPizza(tab.category)}
          key={tab.id}
          className={`${tab.status ? 'active' : ''} filter-item`}
        >
          {tab.name}
        </li>
      ))}
    </div>
  );
};

export default PizzaFilter;
