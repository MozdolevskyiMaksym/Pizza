import React from 'react';
import useLinearData from './use-linear-data';

import './linear-data.scss';

const LinearData = () => {
  const { data, addData, removeData } = useLinearData();

  return (
    <div className="linear-data">
      <h2>Linear Data Structures Example</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          addData({
            name: formData.get('name'),
            age: formData.get('age'),
          });
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="number" name="age" placeholder="Age" required />
        <button type="submit">Add Data</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={item.name}>
            {item.name} ({item.age})
            <button onClick={() => removeData(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinearData;
