import React from "react";

import Header from '@components/global/Header/Header';
import Card from '@components/global/Card';

import { Content, BoxCards } from '@styles/pages/dashboard';

const Dashboard = () => {
  return (
    <>
      <Header hidden={true} />
      <Content>
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
