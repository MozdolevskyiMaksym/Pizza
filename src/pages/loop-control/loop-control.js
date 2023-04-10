/* eslint-disable security/detect-object-injection */
/* eslint-disable no-console */
import React from 'react';

import './loop-control.scss';

const LoopControlPage = () => {
  const numbers = [1, 2, 3, 4, 5];
  const names = ['John', 'Jane', 'Mary', 'Peter', 'Mike'];
  const fruits = ['apple', 'orange', 'banana', 'grape', 'mango'];

  const handleLoop = () => {
    // Using break statement to exit loop
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 3) {
        console.log('Loop exited at index', i);
        break;
      }
      console.log(numbers[i]);
    }

    console.log('-----------------------');

    // Using continue statement to skip iteration
    for (let i = 0; i < names.length; i++) {
      if (names[i] === 'Mary') {
        console.log('Mary skipped');
        continue;
      }
      console.log(names[i]);
    }

    console.log('-----------------------');

    // Using labeled statement to break nested loop
    outerLoop: for (let i = 0; i < fruits.length; i++) {
      for (let j = 0; j < fruits[i].length; j++) {
        if (fruits[i][j] === 'o') {
          console.log('Loop exited at index', i, j);
          break outerLoop;
        }
        console.log(fruits[i][j]);
      }
    }
  };

  return (
    <div className="loop-control">
      <h1>Loop Control Component</h1>
      <button className="loop-control__button" onClick={handleLoop}>
        Execute Loop
      </button>
    </div>
  );
};

export default LoopControlPage;
