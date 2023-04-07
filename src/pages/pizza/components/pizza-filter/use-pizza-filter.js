import { useState } from 'react';

const UsePizzaFilter = ({ onSortPizza }) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Усі',
      category: 'All',
      status: true,
    },
    {
      id: 2,
      name: 'Вегетаріанська',
      category: 'vegetarian',
      status: false,
    },
    {
      id: 3,
      name: 'Рибна',
      category: 'fish',
      status: false,
    },
    {
      id: 4,
      name: 'М`ясна',
      category: 'meat',
      status: false,
    },
  ]);

  const onFilterPizza = (category) => {
    const updatedTabs = tabs.map((item) => {
      if (item.category === category) {
        return { ...item, status: true };
      } else {
        return { ...item, status: false };
      }
    });

    setTabs(updatedTabs);
    onSortPizza(category);
  };

  return {
    tabs,
    onFilterPizza,
  };
};

export default UsePizzaFilter;
