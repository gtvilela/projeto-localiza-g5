import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

import theme from '../../../styles/theme';
import { CardContainer, CardContent, CardDescription, CardFooter } from './styles';

const CardWithSchedules = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardDescription>
          <div>
            <span>Fiat</span>
            <strong>Uno 1.0</strong>
          </div>
          <div>
            <span>Ao dia</span>
            <strong>R$ 68,18</strong>
          </div>
        </CardDescription>
        <Image src="https://www.localiza.com/brasil-site/geral/Frota/SANX.png" width={248} height={136} />
      </CardContent>
      <CardFooter>
        <span>Periodo do aluguel</span>
        <div>
          <strong>18 Jul 2021</strong>
          <FiArrowRight color={theme.colors.textLighter} size={16} />
          <strong>20 Jul 2021</strong>
        </div>
      </CardFooter>
    </CardContainer>
  );
};

export default CardWithSchedules;
