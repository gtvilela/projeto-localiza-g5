import React, { FC, useState, useEffect} from 'react'
import api from '../services/api';
import { Header, Container, CardCategory } from '../components/global';

import { BoxCards, HeaderPag, Section, SectionContainer } from '../styles/pages/category';

interface IProps {
  id: number;
  nome: string;
  url: string;
  descricao: string;
}

const Dashboard = () => {
  const [categories, setCategories] = useState<IProps[]>([]);

  useEffect(() => {
    async function getCategories(): Promise<void> {
      const response = await api.get('api/categoria/buscarTodos');
      setCategories(response.data);
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
          <span>Total {categories.length}  categorias</span>
        </HeaderPag>
        <BoxCards>
          {categories.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </BoxCards>
      </Container>
    </>
  )
}

export default Dashboard;
