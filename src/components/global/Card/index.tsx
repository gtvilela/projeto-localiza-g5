import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPropsCard } from './types/index';
import { CardContainer, CardDescription } from './styles';

const Card: FC<IPropsCard> = ({ veiculo }) => {
  return (
    <Link href={{ pathname: `cars/${veiculo.id}`, query: { data: JSON.stringify(veiculo) } }}>
      <CardContainer>
        <Image src={veiculo.url} width={248} height={136} />
        <CardDescription>
          <div>
            <span>{veiculo.marca.nome}</span>
            <strong>{veiculo.modelo.nome}</strong>
          </div>
          <div>
            <span>Por hora</span>
            <strong>{`R$ ${veiculo.valorHora.toFixed(2)}`}</strong>
          </div>
        </CardDescription>
      </CardContainer>
    </Link>
  );
};

export default Card;
