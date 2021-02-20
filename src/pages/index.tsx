
import React, { FC, useEffect, useState } from 'react';

import { Section, SectionContainer, Content, HeaderPag, BoxCards } from '../styles/pages/dashboard';
import api from '../services/api';
import { Header, Container, CardCategory } from '../components/global';

interface IProps {
  id: number;
  nome: string;
  url: string;
  descricao: string;
}

const Dashboard: FC = () => {
  const [veiculos, setVeiculos] = useState<IProps[]>([]);

  useEffect(() => {
    async function getCategories(): Promise<void> {
      const response = await api.get('api/categoria/buscarTodos');
      setVeiculos(response.data);
    }

    getCategories();
  }, []);
  return (
    <>
      <Header hidden={true} />
      <Section>
        <SectionContainer>
          <h1>Aluguel de Carros com a maior frota do Brasil!
            <span>Faça sua simulação!</span>
          </h1>
        </SectionContainer>
      </Section>
      <Container>
        <HeaderPag>
          <h2>Selecione uma categoria</h2>
          <span>Total {veiculos.length}  categorias</span>
        </HeaderPag>
        <BoxCards>
          {veiculos.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </BoxCards>
      </Container>
    </>
  )
}

export default Dashboard;
