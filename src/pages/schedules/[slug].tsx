import { CardWithSchedules, Header } from '@components/global';
import { ContainerCards, ContainerSchedules } from '@styles/pages/schedules/schedules';
import React, { FC } from 'react';

const Schedules: FC = () => {
  return (
    <>
      <Header hidden={false} />

      <ContainerSchedules>
      <h1>Seus agendamentos</h1>
      <ContainerCards>
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
        </ContainerCards>
      </ContainerSchedules>
    </>
  );
};

export default Schedules;
