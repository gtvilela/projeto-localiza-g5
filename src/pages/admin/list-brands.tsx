import React from 'react';

import { Header, Container, HeaderPages, Table } from '../../components/global/index';

const ListBrands = () => {
  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Marcas" />
        <Table />
      </Container>
    </>
  )
}

export default ListBrands
