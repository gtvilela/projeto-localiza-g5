import Header from '../../components/global/Header';
import React, { FC, useEffect, useState } from 'react';
import {
  HeaderDetails,
  DetailsContainer,
  LabelHeader,
  ContainerInfoCar,
  ContainerLabels,
  Label,
  ContentDescription,
} from '../../styles/pages/cars/details';
import Tab from '../../components/global/Tab';
import Button from '../../components/global/Button';
import FuelSvg from '../../../public/images-components/FuelSvg';
import MeterSvg from '../../../public/images-components/MeterSvg';
import TransmissionSvg from '../../../public/images-components/TransmissionSvg';
import GroupSvg from '../../../public/images-components/GroupSvg';
import HorsepowerSvg from '../../../public/images-components/HorsepowerSvg';
import LuggageSvg from '../../../public/images-components/LuggageSvg';
import Link from 'next/link';

enum Combustivel {
  'Gasolina' = 1,
  'Álcool' = 2,
  'Diesel' = 3
}

import api from '../../services/api';

interface IProps {
  id: number;
  url: string;
  valorHora: number;
  combustivel: number;
  kilomentroPorLitro: string;
  velocidadeMaxima: string;
  ocupantes: number;
  cambio: string;
  limitePorMalas: string;
  potencia: string;
  descricao: string;
  categoria: {
    nome: string;
  };
  marca: {
    nome: string;
  };
  modelo: {
    nome: string;
  };
}


const Details: FC = () => {
  const [vehicle, setVehicle] = useState<IProps>({} as IProps);

  useEffect(() => {
    async function getvehicle(): Promise<void> {
      const response = await api.get('api/veiculo/5');
      setVehicle(response.data)
    }

    getvehicle()
  }, [])

  return (
    <>
      <Header hidden={false} />
      <DetailsContainer>
        <HeaderDetails>
          <div className="car-specification">
            <LabelHeader>{vehicle.marca?.nome}</LabelHeader>
            <span className="model">{vehicle.modelo?.nome}</span>
          </div>
          <div className="info-price">
            <LabelHeader>Ao dia</LabelHeader>
            <span className="price">R${vehicle.valorHora * 24}</span>
          </div>
        </HeaderDetails>

        <hr className="header-break" />

        <ContainerInfoCar>
          <div className="imagem">
            <img src={vehicle.url} />
          </div>
          <div className="container-around">
            <ContainerLabels>
              <Label>
                <MeterSvg width={20} height={20} />
                <div>{vehicle.velocidadeMaxima}km/h</div>
              </Label>
              <Label>
                <LuggageSvg width={20} height={20} />
                <div>{vehicle.limitePorMalas}L</div>
              </Label>
              <Label>
                <FuelSvg width={20} height={20} />
                <div>{Combustivel[vehicle.combustivel]}</div>
              </Label>
              <Label>
                <TransmissionSvg width={20} height={20} />
                <div>{vehicle.cambio}</div>
              </Label>
              <Label>
                <GroupSvg width={20} height={20} />
                <div>{vehicle.ocupantes} pessoas</div>
              </Label>
              <Label>
                <HorsepowerSvg width={20} height={20} />
                <div>{vehicle.potencia}HP</div>
              </Label>
            </ContainerLabels>
            <ContentDescription>
              {vehicle.descricao}
            </ContentDescription>
            <Button>
              <Link href="/">
                Escolher o período do aluguel
              </Link>
            </Button>
          </div>
        </ContainerInfoCar>
      </DetailsContainer>
    </>
  );
};

export default Details;
