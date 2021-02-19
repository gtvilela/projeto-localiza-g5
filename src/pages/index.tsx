import React, { FC, useRef, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCalendar, FiFilter } from 'react-icons/fi';

import Header from '../components/global/Header';
import Input from '../components/global/Input';
import Button from '../components/global/Button';
import Card from '../components/global/Card';

import { Section, SectionContainer, Content, HeaderPag, BoxCards } from '../styles/pages/dashboard';

import api from '../services/api';
import DialogFilter from '@components/DialogFilter/DialogFilter';

interface IProps {
  id: number;
  valorHora: number;
  url: string;
  marca: {
    id: number;
    nome: string;
  };
  modelo: {
    id: number;
    nome: string;
  };
  categoria: {
    id: number;
    nome: string;
  };
  ano: number;
}

const Dashboard: FC = () => {
  const formRef = useRef<FormHandles>();
  const [open, setOpen] = useState(false);
  const [veiculos, setVeiculos] = useState<IProps[]>([]);
  const [filteredVeiculos, setfilteredVeiculos] = useState(veiculos);
  const [value, setValue] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setValue(value);
    console.log(value)
  };

  const handleCancel = () => {
    setOpen(false);
    setfilteredVeiculos(veiculos);
  };

  useEffect(() => {
    justFiltereds(value);
  }, [value]);

  function justFiltereds(value) {
    value.map((i: string) => {
      const teste = veiculos.filter(({ categoria, ano }) => {
        return categoria.nome === i || ano.toString() === i;
      });
      setfilteredVeiculos(teste);
    });
  }
  useEffect(() => {
    async function getVeiculos(): Promise<void> {
      const response = await api.get('/Veiculo/buscarTodos');
      setVeiculos(response.data);
      setfilteredVeiculos(response.data);
    }

    getVeiculos();
  }, []);

  return (
    <>
      <Header hidden={true} />
      <Section>
        <SectionContainer>
          <h1>
            Aluguel de Carros com a maior frota do Brasil!
            <br />
            Faça sua simulação!
          </h1>
          <Form ref={formRef} onSubmit={() => console.log('oi')}>
            <Input name="date" label="Data e hora da retirada" icon={FiCalendar} />
            <Input name="datee" label="Data e hora da entrega" icon={FiCalendar} />
            <Button fullwidth color="yellow">
              Reservar agora
            </Button>
          </Form>
        </SectionContainer>
      </Section>
      <Content>
        <HeaderPag>
          <h2>Selecione um carro</h2>
          <span>Total {filteredVeiculos.length} carros</span>
          <Button className="button-filter" size="medium" onClick={handleClickOpen}>
            <FiFilter />
          </Button>
          <DialogFilter onClose={handleClose} onCancel={handleCancel} isOpen={open} />
        </HeaderPag>
        <BoxCards>
          {filteredVeiculos.map((veiculo) => (
            <Card key={veiculo.id} veiculo={veiculo} />
          ))}
        </BoxCards>
      </Content>
    </>
  );
};

export default Dashboard;
