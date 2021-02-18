import Header from '../../components/global/Header';
import React, { FC, useEffect, useRef, useState } from 'react';
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
import LuggageSvg from '../../../public/images-components/LuggageSvg';
import { Form } from '@unform/web';
import Input from '@components/global/Input';
import { FiCalendar } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

enum Combustivel {
  'Gasolina' = 1,
  'Álcool' = 2,
  'Diesel' = 3,
}

const Details: FC = () => {
  const formRef = useRef<FormHandles>();
  const [veiculo, setVeiculo] = useState({
    modelo: {
      nome: '',
    },
    marca: {
      nome: '',
    },
    url: '',
    velocidadeMaxima: '',
    limitePorMalas: '',
    valorHora: 0,
    combustivel: 0,
    cambio: '',
    ocupantes: 0,
    potencia: 0,
    descricao: '',
  });
  const getQueryStringParams = (query) => {
    return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
          let [key, value] = param.split('=');
          params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
          return params;
        }, {})
      : {};
  };

  useEffect(() => {
    const { data } = getQueryStringParams(window.location.search);
    console.log(JSON.parse(data));
    setVeiculo(JSON.parse(data));
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
                <LuggageSvg width={20} height={20} />
                <div>{veiculo.limitePorMalas}L</div>
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
                  <div>{veiculo.descricao}</div>
                </Tab.Content>
                <Tab.Content eventKey={1}>
                <div style={{width: '450px'}}>
                  <Form ref={formRef} onSubmit={() => console.log('oi')}>
                    <Input name="retirada" label="Data e hora da retirada" icon={FiCalendar} />
                    <Input name="entrega" label="Data e hora da entrega" icon={FiCalendar} />
                    <Button fullwidth type="submit">
                      Reservar agora
                    </Button>
                  </Form>
                  </div>
                </Tab.Content>
              </Tab>
            </TabContainer>
          </div>
        </ContainerInfoCar>
      </DetailsContainer>
    </>
  );
};

export default Details;
