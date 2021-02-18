import React, { FC, useRef } from "react";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '@components/global/Button'
import Card from '@components/global/Card';

import { Section, SectionContainer, Content, HeaderPag, BoxCards } from '@styles/pages/dashboard';
import Header from "@components/global/Header/Header";
import DatePickerForm from "@components/InputCalendario/DatePickerForm";

const Dashboard: FC = () => {
  const formRef = useRef<FormHandles>();

  return (
    <>
      <Header hidden={true} />
      <Section>
        <SectionContainer>
          <h1>
            Oio
          </h1>
          <Form ref={formRef} onSubmit={() => console.log('oi')}>
            <DatePickerForm background="#ffffff" color="#000000" type="text" />
            <DatePickerForm background="#ffffff" color="#000000" type="text" />
            <Button color="yellow">Reservar agora</Button>
          </Form>
        </SectionContainer>
      </Section>
      <Content>
        <HeaderPag>
          <h2>Selecione um carro</h2>
          <span>Total 6 carros</span>
        </HeaderPag>
        <BoxCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </BoxCards>
      </Content>
    </>
  );
}

export default Dashboard
