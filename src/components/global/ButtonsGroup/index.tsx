import React, { HTMLAttributes, FC } from 'react';

import { ButtonsGroupContainer } from './styles';

type IButtonsGroupProps = HTMLAttributes<HTMLDivElement>

const ButtonsGroup: FC<IButtonsGroupProps> = ({ children }) => {
  return (
    <ButtonsGroupContainer>
      {children}
    </ButtonsGroupContainer>
  );
};

export default ButtonsGroup;
