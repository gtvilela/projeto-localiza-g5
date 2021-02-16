import React from "react";
import Header from "@components/global/Header/Header";
import InputCalendario from "@components/InputCalendario/InputCalendario";

import Button from '@components/global/Button'
import Card from '@components/global/Card';

import { Section, SectionContainer, TitleSection, FormCustom, Content, HeaderPag, BoxCards } from '@styles/pages/dashboard';

const Dashboard = () => {
  return (
    <>
      <Header hidden={true} />
      <Section>
        <SectionContainer>
          <TitleSection>
            Oio
          </TitleSection>
          <FormCustom>
            <InputCalendario background="#ffffff" color="#000000" type="text" />
            <InputCalendario background="#ffffff" color="#000000" type="text" />
            <Button color="yellow">Reservar agora</Button>
          </FormCustom>
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
