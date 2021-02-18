import React, { ButtonHTMLAttributes, FC } from 'react';

import { ButtonContainer } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'yellow' | 'red';
  size?: 'large' | 'medium';
  radius?: boolean;
  fullwidth?: boolean;
}

const Button: FC<IButtonProps> = ({ type = 'button', size = 'large', color, radius, children, ...rest }) => {
  return (
    <ButtonContainer type={type} color={color} size={size} radius={radius} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
