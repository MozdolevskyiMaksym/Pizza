import { useState } from 'react';
import { List } from 'immutable';

const useEmmutabilityExample = () => {
  const [items, setItems] = useState(List(['Item 1', 'Item 2', 'Item 3']));

  const addItem = () => {
    const newItem = `Item ${items.size + 1}`;
    const newItems = items.push(newItem);
    setItems(newItems);
  };
  return {
    items,
    addItem,
  };
};

export default useEmmutabilityExample;
