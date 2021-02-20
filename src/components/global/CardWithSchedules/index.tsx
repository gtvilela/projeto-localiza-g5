import React, { FC } from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

import theme from '../../../styles/theme';
import { CardContainer, CardContent, CardDescription, CardFooter } from './styles';

interface IVehicle {
  data: {
    id: number;
    veiculo: {
      url: string;
      valorHora: string;
      marca: {
        nome: string;
      }
      modelo: {
        nome: string;
      }
    }
  }
}

const CardWithSchedules: FC<IVehicle> = ( { data } ) => {
  return (
    <CardContainer>
      <CardContent>
        <CardDescription>
          <div>
            <span>{data.veiculo.marca.nome}</span>
            <strong>{data.veiculo.modelo.nome}</strong>
          </div>
          <div>
            <span>por dia</span>
            <strong>R$ {Number(data.veiculo.valorHora) * 24}</strong>
          </div>
        </CardDescription>
        <Image src={data.veiculo.url ? data.veiculo.url : '/assets/imageNotFound.jpg'} width={248} height={136} />
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
