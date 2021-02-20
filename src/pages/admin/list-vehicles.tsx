import React, { FC, useState, useEffect } from 'react';

import { Header, Container, HeaderPages, Table, Card } from '../../components/global/index';

import api from '../../services/api';

export interface IPropsCard {
  vehicles: {
    id: number;
    valorHora: number;
    url: string;
    marca: {
      nome: string;
    };
    modelo: {
      nome: string;
    };
  };
}


const ListVehicles = () => {
  const [vehicles, setVehicles] = useState<IPropsCard[]>([] as IPropsCard[]);

  useEffect(() => {
    async function getVeiculos(): Promise<void> {
      const response = await api.get('api/agendamento/buscarPorCPF/string');
      setVehicles(response.data)
    }

    getVeiculos()
  }, [])


  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Veículos" />
        {/* {vehicles.map(vehicle => (
          <Card vehicle1={vehicle} />
        ))} */}
      </Container>
    </>
  )
}

export default ListVehicles
