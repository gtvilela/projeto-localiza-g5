import React from "react";
import { FiCalendar } from 'react-icons/fi'

import Header from '@components/global/Header/Header';
import Input from '@components/global/Input'
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
            <Input name="date" label="Data e hora da retirada" icon={FiCalendar} />
            <Input name="datee" label="Data e hora da entrega" icon={FiCalendar} />
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
