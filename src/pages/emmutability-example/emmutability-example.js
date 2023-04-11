import React from 'react';

import './emmutability-example.scss';
import useEmmutabilityExample from './use-emmutability-example';

const ImmutabilityExample = () => {
  const { items, addItem } = useEmmutabilityExample();

  return (
    <div className="emmutability-example">
      <h1>Immutable List Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ImmutabilityExample;
