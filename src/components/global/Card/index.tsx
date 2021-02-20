import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPropsCard } from './types/index';
import { CardContainer, CardDescription } from './styles';

const Card: FC<IPropsCard> = ({ vehicles }) => {
  return (
    <Link href={`/cars/${vehicles.id}`}>
      <CardContainer>
        <Image src={vehicles.url} width={248} height={136} />
        <CardDescription>
          <div>
            <span>{vehicles?.marca.nome}</span>
            <strong>{vehicles?.modelo.nome}</strong>
          </div>
          <div>
            <span>Por hora</span>
            <strong>{`R$ ${vehicles?.valorHora.toFixed(2)}`}</strong>
          </div>
        </CardDescription>
      </CardContainer>
    </Link>
  );
};

export default Card;
