/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './drinks-filter.scss';

export type FilterDrinksPropsType = {
  onSortDrink: (category: string) => void;
};

const FilterDrinks = ({ onSortDrink }: FilterDrinksPropsType) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Усі',
      category: 'All',
      status: true,
    },
    {
      id: 2,
      name: 'Соки',
      category: 'Juice',
      status: false,
    },
    {
      id: 3,
      name: 'Води',
      category: 'Water',
      status: false,
    },
  ]);

  const onFilterDrink = (category: string) => {
    const updatedTabs = tabs.map((item) => {
      if (item.category === category) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });
    setTabs(updatedTabs);
    onSortDrink(category);
  };

  return (
    <ul className="filter-container">
      {tabs.map((tab) => (
        <li
          onClick={() => onFilterDrink(tab.category)}
          key={tab.id}
          className={`${tab.status ? 'active' : ''} filter-item`}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterDrinks;
