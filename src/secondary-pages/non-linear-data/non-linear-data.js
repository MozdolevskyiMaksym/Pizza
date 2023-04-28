import React from 'react';
import useNonLinearData from './use-non-linear-data';

import './non-linear-data.scss';

const NonLinearData = () => {
  const { data } = useNonLinearData();

  return (
    <div className="non-linear-data">
      <h2>Non-Linear Data Example</h2>
      <div className="data-container">
        <div className="data-item">
          <span>Name: </span>
          <span>{data.name}</span>
        </div>
        <div className="data-item">
          <span>Age: </span>
          <span>{data.age}</span>
        </div>
        <div className="data-item">
          <span>Hobbies: </span>
          <ul>
            {data.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="data-item">
          <span>Address: </span>
          <ul>
            <li>Street: {data.address.street}</li>
            <li>City: {data.address.city}</li>
            <li>State: {data.address.state}</li>
            <li>Zip: {data.address.zip}</li>
          </ul>
        </div>
        <div className="data-item">
          <span>Notes: </span>
          <ul>
            {data.notes.map((note) => (
              <li key={note.id}>{note.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NonLinearData;
