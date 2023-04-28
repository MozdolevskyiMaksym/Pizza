import React, { useState } from 'react';
import './animated-button.scss';

type AnimatedButtonPropsType = {
  text: string;
  onClick: () => void;
};

const AnimatedButton = ({ text, onClick }: AnimatedButtonPropsType) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      className="animated-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="animated-button__text">{text}</div>
      <div
        className={`animated-button__bg${
          hovered ? ' animated-button__bg--hover' : ''
        }`}
      ></div>
    </button>
  );
};

export default AnimatedButton;
