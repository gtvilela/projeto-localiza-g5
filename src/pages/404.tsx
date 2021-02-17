import React from 'react'

import Header from '../components/global/Header';

import { Content} from '../styles/pages/404';

const NotFound = () => {
  return (
    <>
      <Header hidden={false} />
      <Content>
        <h1>404</h1>
        <h3>Página não encontrada!</h3>
        <p>Você está perdido?</p>
      </Content>
    </>
  )
}

export default NotFound
