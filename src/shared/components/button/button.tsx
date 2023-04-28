import React from 'react';
import Button from '@atlaskit/button';
import './button.scss';

export type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export type ButtonComponentPropsType = {
  onClick?: () => void;
  buttonName: string;
  buttonType: ButtonType;
  isDisabled?: boolean;
};

const ButtonComponent = ({
  onClick,
  buttonName,
  buttonType,
  isDisabled,
}: ButtonComponentPropsType) => {
  return (
    <div className="btn">
      <Button
        onClick={onClick}
        className="btn"
        type={buttonType as ButtonType}
        isDisabled={isDisabled}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default ButtonComponent;
