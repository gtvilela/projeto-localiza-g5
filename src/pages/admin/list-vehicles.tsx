import React from 'react';

import { Header, Container, HeaderPages, Table } from '../../components/global/index';

const ListVehicles = () => {
  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Veículos" />
        <Table />
      </Container>
    </>
  )
}

export default ListVehicles
