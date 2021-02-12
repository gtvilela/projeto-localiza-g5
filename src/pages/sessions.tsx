import React, { FC } from 'react';
import Image from 'next/image';

import Tab from '@components/Tab/Tab';
import FormLogin from '@components/pages/sessions/FormLogin';
import FormRegister from '@components/pages/sessions/FormRegister';

import {
  Container,
  Content,
  Background,
  ContainerImage,
} from '@styles/pages/sessions';

const Sessions: FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <div>
          <ContainerImage>
            <Image
              src="/assets/logo-green.svg"
              alt="Logo SJCC"
              width={268}
              height={52}
            />
          </ContainerImage>
          <Tab>
            <Tab.Header>
              <Tab.HeaderItem eventKey={0}>Entrar</Tab.HeaderItem>
              <Tab.HeaderItem eventKey={1}>Cadastrar</Tab.HeaderItem>
            </Tab.Header>
            <Tab.Content eventKey={0}>
              <FormLogin />
            </Tab.Content>
            <Tab.Content eventKey={1}>
              <FormRegister />
            </Tab.Content>
          </Tab>
        </div>
      </Content>
    </Container>
  );
};

export default Sessions;
