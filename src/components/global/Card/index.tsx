import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CardContainer, CardDescription } from './styles';

interface IProps {
  veiculo: {
    id: number;
    valorHora: number;
    url: string;
    marca: {
      nome: string;
    }
    modelo: {
      nome: string;
    }
  }
}

const Card: FC<IProps> = ({ veiculo }) => {
  return (
    <Link href="/cars/1" passHref>
      <CardContainer>
        <Image
          src={veiculo.url}
          width={248}
          height={136}
        />
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
  )
}

export default Card;
