import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import {
  HeaderDetails,
  DetailsContainer,
  LabelHeader,
  ContainerInfoCar,
  ContainerLabels,
  Label,
  TabContainer
} from '../../styles/pages/cars/details';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Header, Tab, Button } from '../../components/global'

import { FuelSvg, GroupSvg, HorsepowerSvg, LuggageSvg, MeterSvg, TransmissionSvg } from '../../../public/images-components/IconsReact';
import { AiFillHourglass, AiOutlineHourglass } from 'react-icons/ai';

enum Combustivel {
  'Gasolina' = 1,
  'Álcool' = 2,
  'Diesel' = 3,
}

import api from '../../services/api';
import DatePickerForm from '@components/global/InputDatepicker/DatePickerForm';
import InputTime from '@components/global/InputTime/InputTime';
import moment from 'moment';
import { useAuth } from '../../context/auth';

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
  const formRef = useRef<FormHandles>();
  const [vehicle, setVehicle] = useState<IProps>({} as IProps);
  const { query, push } = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    async function getvehicle(): Promise<void> {
      if(query.slug) {
        const response = await api.get(`api/veiculo/${query.slug}`);
        setVehicle(response.data)
      }
    }

    getvehicle()
  }, [query])

  const handleSubmitSchedule = useCallback(async (data) => {

    try {
      if (!user) {
        push('/sessions');
        return
      }

      if (data.start_date && data.time_to_get && data.end_date && data.time_to_deliver) {
        const start = moment((String(data.start_date).replaceAll('/','-')) + (String(data.time_to_get)), 'DD MM YYYY hh:mm'); //todays date
        const end = moment((String(data.end_date).replaceAll('/','-')) + (String(data.time_to_deliver)), 'DD MM YYYY hh:mm'); // another date
        const duration = moment.duration(start.diff(end));
        const hours = duration.asHours();
        const valorTotal = Math.abs(hours) * vehicle.valorHora;
        const body = {
          "dataAgendamento": moment().toDate(),
          "dataColetaPrevista": start.toDate(),
          "dataColetaRealizada": start.toDate(),
          "dataEntregaPrevista": end.toDate(),
          "dataEntregaRealizada": end.toDate(),
          "valorHora": vehicle.valorHora,
          "horasLocacao": Math.abs(hours),
          "subTotal": valorTotal,
          "custosAdicionais": 0,
          "valorTotal": valorTotal,
          "realizadaVistoria": true,
          "idPessoa": user.id,
          "idVeiculo": vehicle.id,
        }

        await api.post(`api/agendamento/`, body);
      }

    } catch (error) {

    }




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
            <TabContainer>
              <Tab>
                <Tab.Header>
                  <Tab.HeaderItem eventKey={0}>Período</Tab.HeaderItem>
                  <Tab.HeaderItem eventKey={1}>Sobre</Tab.HeaderItem>
                </Tab.Header>
                <Tab.Content eventKey={0}>
                  <Form ref={formRef} onSubmit={handleSubmitSchedule}>
                    <DatePickerForm background="#ffffff" color="#000000" type="text" name={'start_date'} label={'Data da retirada'} />
                    <InputTime
                      name="time_to_get"
                      icon={AiFillHourglass}
                      label="Hora de retirada"
                      />
                    <DatePickerForm background="#ffffff" color="#000000" type="text" name={'end_date'} label={'Data da entrega'}/>
                    <InputTime
                      name="time_to_deliver"
                      icon={AiOutlineHourglass}
                      label="Hora de entrega"
                      />
                    <Button fullwidth color="yellow" type={'submit'}>Reservar agora</Button>
                  </Form>
                </Tab.Content>
                <Tab.Content eventKey={1}>
                  <p style={{maxWidth: 395}}>
                    {vehicle.descricao}
                  </p>
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
