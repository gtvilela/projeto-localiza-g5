import React, { FC } from 'react';
import Image from 'next/image';

import Header from '../../components/global/Header/Header';
import Tab from '../../components/global/Tab/Tab';

import FormProfile from '../../components/pages/me/FormProfile';
import FormPassword from '../../components/pages/me/FormPassword';
import CardWithSchedules from '../../components/global/CardWithSchedules';

import { Content, BoxProfile, Title, BoxSchedules, ImageContainer  } from '../../styles/pages/me/profile'

const Profile: FC = () => {
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
          <Title>Agendamentos feitos</Title>
          <CardWithSchedules />
          <CardWithSchedules />
        </BoxSchedules>
      </Content>
    </>
  );
};

export default Profile;
