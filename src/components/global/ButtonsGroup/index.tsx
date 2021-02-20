import React, { HTMLAttributes, FC } from 'react';

import { ButtonsGroupContainer } from './styles';

type IPropsButtonsGroup = HTMLAttributes<HTMLDivElement>;

const ButtonsGroup: FC<IPropsButtonsGroup> = ({ children }) => {
  return <ButtonsGroupContainer>{children}</ButtonsGroupContainer>;
};

export default ButtonsGroup;
