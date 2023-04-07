import React from 'react';
import './input.scss';

const Input = ({ inputType, inputName, value, onChange }) => (
  <input
    className="input"
    name={inputName}
    type={inputType}
    value={value}
    onChange={onChange}
  />
);

export default Input;
