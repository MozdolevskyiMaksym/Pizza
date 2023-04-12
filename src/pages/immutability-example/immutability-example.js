import React from 'react';
import useImmutabilityExample from './use-immutability-example';

import './immutability-example.scss';

const ImmutabilityExample = () => {
  const { items, person, updatePerson, addItem } = useImmutabilityExample();

  return (
    <div className="emmutability-example">
      <div>
        <h1>My List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </div>
      <div style={{ width: '600px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Name</label>
            <input
              type="text"
              value={person.get('name')}
              onChange={(e) => updatePerson('name', e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Age</label>
            <input
              type="number"
              value={person.get('age')}
              onChange={(e) => updatePerson('age', parseInt(e.target.value))}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Gender</label>
            <input
              type="text"
              value={person.get('gender')}
              onChange={(e) => updatePerson('gender', e.target.value)}
            />
          </div>
        </div>
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 177px)',
            gap: '34px',
          }}
        >
          <li style={{ textAlign: 'center' }}>{person.name}</li>
          <li style={{ textAlign: 'center' }}>{person.age}</li>
          <li style={{ textAlign: 'center' }}>{person.gender}</li>
        </ul>
      </div>
    </div>
  );
};

export default ImmutabilityExample;
