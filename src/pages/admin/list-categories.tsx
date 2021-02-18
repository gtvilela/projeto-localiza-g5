import React from 'react';

import { Header, Container, HeaderPages, Table } from '../../components/global/index';

const ListCategories = () => {
  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Categorias" />
        <Table />
      </Container>
    </>
  )
}

export default ListCategories
