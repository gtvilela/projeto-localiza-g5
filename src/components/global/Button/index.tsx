import React, { FC } from 'react';

import { IPropsButton } from './types/index';
import { ButtonContainer } from './styles';

const Button: FC<IPropsButton> = ({ type = 'button', size = 'large', color, radius, children, ...rest }) => {
  return (
    <ButtonContainer type={type} color={color} size={size} radius={radius} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
