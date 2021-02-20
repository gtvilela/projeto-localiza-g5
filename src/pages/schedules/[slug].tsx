import { CardWithSchedules, Header } from '@components/global';
import { ContainerSchedules } from '@styles/pages/schedules/schedules';
import React, { FC } from 'react';

const Schedules: FC = () => {
  return (
    <>
      <Header hidden={false} />

      <ContainerSchedules>
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
        <CardWithSchedules />
      </ContainerSchedules>
    </>
  );
};

export default Schedules;
