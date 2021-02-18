import Image from 'next/image';
import Header from '../../components/global/Header';
import React, { FC } from 'react';
import {
  HeaderDetails,
  DetailsContainer,
  LabelHeader,
  ContainerInfoCar,
  ContainerLabels,
  Label,
  TabContainer,
} from '../../styles/pages/details/details';
import Tab from '../../components/global/Tab/Tab';
import Button from '../../components/global/Button';
import FuelSvg from '../../../public/images-components/FuelSvg';
import MeterSvg from '../../../public/images-components/MeterSvg';
import CarSvg from '../../../public/images-components/Car';
import TransmissionSvg from '../../../public/images-components/TransmissionSvg';
import GroupSvg from '../../../public/images-components/GroupSvg';
import HorsepowerSvg from '../../../public/images-components/HorsepowerSvg';
import ZeroToHundredSvg from '../../../public/images-components/ZeroToHundredSvg';

const Details: FC = () => {
  return (
    <>
      <Header hidden={false} />
      <DetailsContainer>
        <HeaderDetails>
          <div className="car-specification">
            <LabelHeader>Fiat</LabelHeader>
            <span className="model">Uno 1.0</span>
          </div>
          <div className="info-price">
            <LabelHeader>Ao dia</LabelHeader>
            <span className="price">R$68,18</span>
          </div>
        </HeaderDetails>

        <hr className="header-break" />

        <ContainerInfoCar>
          <div className="imagem">
            <CarSvg width={544} height={299} />
          </div>
          <div className="container-around">
            <ContainerLabels>
              <Label>
                <MeterSvg width={20} height={20} />
                <div>270km/h</div> {/* propriedade km do objeto carro */}
              </Label>
              <Label>
                <ZeroToHundredSvg width={20} height={20} />
                <div>6.8s</div> {/* propriedade 0-100 do objeto carro */}
              </Label>
              <Label>
                <FuelSvg width={20} height={20} />
                <div>Gasolina</div> {/* propriedade combustível do objeto carro */}
              </Label>
              <Label>
                <TransmissionSvg width={20} height={20} />
                <div>Auto</div> {/* propriedade transmissão do objeto carro */}
              </Label>
              <Label>
                <GroupSvg width={20} height={20} />
                <div>5 pessoas</div> {/* propriedade qtdPessoa do objeto carro */}
              </Label>
              <Label>
                <HorsepowerSvg width={20} height={20} />
                <div>280HP</div> {/* propriedade hp do objeto carro */}
              </Label>
            </ContainerLabels>
            <TabContainer>
              <Tab>
                <Tab.Header>
                  <Tab.HeaderItem eventKey={0}>Sobre</Tab.HeaderItem>
                  <Tab.HeaderItem eventKey={1}>Período</Tab.HeaderItem>
                </Tab.Header>
                <Tab.Content eventKey={0}>
                  <div className="description">
                  O Fiat Uno chama a atenção. Além de um novo design frontal, mais moderno e cheio de personalidade, o
                  Uno conta com novos parachoques e grade dianteira, que ressaltam ainda mais os contornos do modelo.
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
