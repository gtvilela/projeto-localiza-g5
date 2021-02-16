import React, { ButtonHTMLAttributes, FC } from 'react';

import { ButtonContainer } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'yellow'
}

const Button: FC<IButtonProps> = ({ type = 'button', color, children, ...rest }) => {
  return (
    <ButtonContainer type={type} color={color} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
