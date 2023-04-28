import React from 'react';
import _ from 'underscore';
import './underscore.scss';

const Underscore = () => {
  const numbers = [1, 2, 3, 4, 5];
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 },
  ];

  // Example of using map function from underscore.js
  const mappedNumbers = _.map(numbers, (num) => num * 2);

  // Example of using filter function from underscore.js
  const filteredNumbers = _.filter(numbers, (num) => num % 2 === 0);

  // Example of using reduce function from underscore.js
  const reducedNumbers = _.reduce(numbers, (sum, num) => sum + num, 0);

  // Example of using groupBy function from underscore.js
  const groupedByAge = _.groupBy(users, 'age');

  const handleClick = _.debounce(() => {
    alert('click');
  }, 1500);

  return (
    <div className="utils-demo">
      <h1>Examples of underscore.js methods</h1>
      <div className="example">
        <h2>Map function</h2>
        <p>Original array: {numbers.join(', ')}</p>
        <p>Mapped array: {mappedNumbers.join(', ')}</p>
      </div>
      <div className="example">
        <h2>Filter function</h2>
        <p>Original array: {numbers.join(', ')}</p>
        <p>Filtered array: {filteredNumbers.join(', ')}</p>
      </div>
      <div className="example">
        <h2>Reduce function</h2>
        <p>Original array: {numbers.join(', ')}</p>
        <p>Reduced value: {reducedNumbers}</p>
      </div>
      <div className="example">
        <h2>Grouped by Age:</h2>
        <ul className="list">
          {Object.entries(groupedByAge).map(([age, users]) => (
            <li key={age}>
              <h3>{age} years old:</h3>
              <ul className="result">
                {users.map(({ name }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="example">
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Underscore;
