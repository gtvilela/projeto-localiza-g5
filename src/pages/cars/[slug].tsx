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
            <Image src="/assets/car.svg" width={544} height={299} />
          </div>
          <div className="container-around">
            <ContainerLabels>
              <Label>
                <Image src="/assets/meter.svg" width={20} height={20} />
                <div>270km/h</div> {/* propriedade km do objeto carro */}
              </Label>
              <Label>
                <Image src="/assets/fuel.svg" width={20} height={20} />
                <div>6.8s</div> {/* propriedade 0-100 do objeto carro */}
              </Label>
              <Label>
                <Image src="/assets/fuel.svg" width={20} height={20} />
                <div>Gasolina</div> {/* propriedade combustível do objeto carro */}
              </Label>
              <Label>
                <Image src="/assets/transmission.svg" width={20} height={20} />
                <div>Auto</div> {/* propriedade transmissão do objeto carro */}
              </Label>
              <Label>
                <Image src="/assets/group.svg" width={20} height={20} />
                <div>5 pessoas</div> {/* propriedade qtdPessoa do objeto carro */}
              </Label>
              <Label>
                <Image src="/assets/horsepower.svg" width={20} height={20} />
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
