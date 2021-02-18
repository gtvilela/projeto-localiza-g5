import Header from '../../components/global/Header';
import React, { FC, useEffect, useState } from 'react';
import {
  HeaderDetails,
  DetailsContainer,
  LabelHeader,
  ContainerInfoCar,
  ContainerLabels,
  Label,
  TabContainer,
} from '../../styles/pages/cars/details';
import Tab from '../../components/global/Tab';
import Button from '../../components/global/Button';
import FuelSvg from '../../../public/images-components/FuelSvg';
import MeterSvg from '../../../public/images-components/MeterSvg';
import TransmissionSvg from '../../../public/images-components/TransmissionSvg';
import GroupSvg from '../../../public/images-components/GroupSvg';
import HorsepowerSvg from '../../../public/images-components/HorsepowerSvg';
import ZeroToHundredSvg from '../../../public/images-components/ZeroToHundredSvg';

enum Combustivel {
  'Gasolina' = 1,
  'Álcool' = 2,
  'Diesel' = 3
}

const Details: FC = () => {
 const [veiculo, setVeiculo] = useState({
    modelo: {
      nome: 'initial'
    },
    marca: {
      nome: 'Initial'
    },
    url: 'teste',
    velocidadeMaxima: 'teste',
    valorHora: 1,
    combustivel: 1,
    cambio: 'teste',
    ocupantes: 5,
    potencia: 0,
    descricao: 'teste'
 })
  const getQueryStringParams = query => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split('&')
            .reduce((params, param) => {
                    let [key, value] = param.split('=');
                    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                    return params;
                }, {}
            )
        : {}
  };


  useEffect(() => {
    const { data } = getQueryStringParams(window.location.search);
    console.log(JSON.parse(data))
    setVeiculo(JSON.parse(data))
  }, []);


  return (
    <>
      <Header hidden={false} />
      <DetailsContainer>
        <HeaderDetails>
          <div className="car-specification">
            <LabelHeader>{veiculo.marca.nome}</LabelHeader>
            <span className="model">{veiculo.modelo.nome}</span>
          </div>
          <div className="info-price">
            <LabelHeader>Ao dia</LabelHeader>
            <span className="price">R${veiculo.valorHora * 24}</span>
          </div>
        </HeaderDetails>

        <hr className="header-break" />

        <ContainerInfoCar>
          <div className="imagem">
            <img src={veiculo.url} />
          </div>
          <div className="container-around">
            <ContainerLabels>
              <Label>
                <MeterSvg width={20} height={20} />
                <div>{veiculo.velocidadeMaxima}km/h</div>
              </Label>
              <Label>
                <ZeroToHundredSvg width={20} height={20} />
                <div>6.8s</div>
              </Label>
              <Label>
                <FuelSvg width={20} height={20} />
                <div>{Combustivel[veiculo.combustivel]}</div>
              </Label>
              <Label>
                <TransmissionSvg width={20} height={20} />
                <div>{veiculo.cambio}</div>
              </Label>
              <Label>
                <GroupSvg width={20} height={20} />
                <div>{veiculo.ocupantes} pessoas</div>
              </Label>
              <Label>
                <HorsepowerSvg width={20} height={20} />
                <div>{veiculo.potencia}HP</div>
              </Label>
            </ContainerLabels>
            <TabContainer>
              <Tab>
                <Tab.Header>
                  <Tab.HeaderItem eventKey={0}>Sobre</Tab.HeaderItem>
                  <Tab.HeaderItem eventKey={1}>Período</Tab.HeaderItem>
                </Tab.Header>
                <Tab.Content eventKey={0}>
                  <div>
                 {veiculo.descricao}
                  </div>

                </Tab.Content>
                <Tab.Content eventKey={1}>
                  <div className="description">Teste 2</div>
                </Tab.Content>
              </Tab>
            </TabContainer>
            <Button>Escolher o período do aluguel</Button>
          </div>
        </ContainerInfoCar>
      </DetailsContainer>
    </>
  );
};

export default Details;
