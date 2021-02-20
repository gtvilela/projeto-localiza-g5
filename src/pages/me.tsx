import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

import api from '../services/api';

import { useAuth } from '../context/auth';

import {Header, Tab } from '../components/global/';

import FormProfile from '../components/pages/me/FormProfile';
import FormPassword from '../components/pages/me/FormPassword';
import CardWithSchedules from '../components/global/CardWithSchedules';

import { Content, BoxProfile, Title, BoxSchedules, ImageContainer  } from '../styles/pages/me/profile'

interface IVehicle {
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

const Profile: FC = () => {
  const [schedules, setSchedules] = useState<IVehicle[]>([]);
  const { user } = useAuth();
  const { push, query } = useRouter();

  useEffect(() => {
    if (!user) {
      push('/');
    }
  }, [user])

  useEffect(() => {
    async function getSchedules(): Promise<void> {
      if(user) {
        const response = await api.get(`/api/Agendamento/buscarPorCPF/${user.documento}`);
        setSchedules(response.data);
      }
    }
    getSchedules();
  }, [query])



  return (
    <>
      <Header hidden={false} />
      <Content>
        <BoxProfile>
          <ImageContainer>
            <Image
              src="/assets/avatar.svg"
              width={184}
              height={184}
            />
          </ImageContainer>
          <Tab>
            <Tab.Header>
              <Tab.HeaderItem eventKey={0}>Dados</Tab.HeaderItem>
              <Tab.HeaderItem eventKey={1}>Trocar senha</Tab.HeaderItem>
            </Tab.Header>
            <Tab.Content eventKey={0}>
              <FormProfile />
            </Tab.Content>
            <Tab.Content eventKey={1}>
              <FormPassword />
            </Tab.Content>
          </Tab>
        </BoxProfile>
        <BoxSchedules>
          <Title>Últimos agendamentos</Title>
          {schedules.length > 0 && schedules.map(schedule => (
            <CardWithSchedules
              key={schedule.id}
              data={schedule}
            />
          ))}
          {schedules.length === 0 && (
            <p>Nenhum agendamento encontrado</p>
          )}
        </BoxSchedules>
      </Content>
    </>
  );
};

export default Profile;
