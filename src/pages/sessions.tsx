import React, { FC, useRef } from 'react';
import Image from 'next/image';
import InputText from '@components/Input';
import { Form } from '@unform/web';
import Tab from '@components/Tab/Tab';
import Button from '@components/Button';
import { SubmitHandler, FormHandles } from '@unform/core';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import {
  Container,
  Content,
  Background,
  ContainerImage,
} from '../styles/pages/sessions';

const Sessions: FC = () => {
  const formLoginRef = useRef<FormHandles>(null);
  const formRegisterRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Background />
      <Content>
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
            <Form ref={formLoginRef} onSubmit={data => console.log(data)}>
              <InputText name="email" icon={FiMail} />
              <InputText
                name="password"
                icon={FiLock}
                type="password"
              />
              <Button>Entrar</Button>
            </Form>
          </Tab.Content>
          <Tab.Content eventKey={1}>
            <Form ref={formRegisterRef} onSubmit={() => console.log('oi')}>
              <InputText name="name"  icon={FiUser} />
              <InputText name="email" icon={FiMail} />
              <InputText name="cpf"icon={FiMail} />
              <InputText name="password"  icon={FiLock} />
              <InputText
                name="confirmation_password"
                icon={FiLock}
              />
              <Button>Cadastrar</Button>
            </Form>
          </Tab.Content>
        </Tab>
      </Content>
    </Container>
  );
};

export default Sessions;
