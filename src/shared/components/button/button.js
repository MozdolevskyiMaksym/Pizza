import React from 'react';
import Button from '@atlaskit/button';
import './button.scss';

const ButtonComponent = ({ onClick, buttonName, buttonType }) => {
  return (
    <div className="btn">
      <Button onClick={onClick} className="btn" type={buttonType}>
        {buttonName}
      </Button>
    </div>
  );
};

export default ButtonComponent;
