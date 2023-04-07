import React from 'react';
import useMathMethods from './use-math-methods';

import './math-methods.scss';

const NumbersList = () => {
  const {
    exponentNumber,
    sinNumber,
    cosNumber,
    roundNumber,
    ceilNumber,
    floorNumber,
    logNumber,
    sqrtNumber,
    tanNumber,
    atanNumber,
  } = useMathMethods();

  return (
    <div className="math-methods">
      <ul>
        <li>{exponentNumber}</li>
        <li>{sinNumber}</li>
        <li>{cosNumber}</li>
        <li>{roundNumber}</li>
        <li>{ceilNumber}</li>
        <li>{floorNumber}</li>
        <li>{logNumber}</li>
        <li>{sqrtNumber}</li>
        <li>{tanNumber}</li>
        <li>{atanNumber}</li>
      </ul>
    </div>
  );
};

export default NumbersList;
