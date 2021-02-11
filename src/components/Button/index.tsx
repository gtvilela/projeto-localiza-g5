import React, { FC, ButtonHTMLAttributes} from 'react';

import {ButtonContainer} from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButtonProps> = ({ type = 'button', children, ...rest}) => {
  return (
    <ButtonContainer type={type} {...rest}>
      {children}
    </ButtonContainer>
  )
}

export default Button;
