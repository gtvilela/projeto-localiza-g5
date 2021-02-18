import React, { FC } from 'react';
import { ContainerCustom } from './styles';

const Container: FC = ({ children }) => {
  return (
    <ContainerCustom>
      {children}
    </ContainerCustom>
  )
}

export default Container
