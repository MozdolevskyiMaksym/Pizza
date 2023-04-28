/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './input.scss';

type InputPropsType = {
  inputType: string;
  inputName: string;
  value?: string;
  onChange?: any;
};

const Input = ({ inputType, inputName, value, onChange }: InputPropsType) => (
  <input
    className="input"
    name={inputName}
    type={inputType}
    value={value}
    onChange={onChange}
  />
);

export default Input;
