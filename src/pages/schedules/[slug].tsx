import { CardWithSchedules, Header } from "@components/global";
import { ContainerSchedules } from "@styles/pages/schedules/schedules";
import React, { FC } from "react";

const Schedules: FC = () => {
  return <div>
    <Header hidden={false} />

<ContainerSchedules>
 <div>
    <CardWithSchedules />
    <CardWithSchedules />
    <CardWithSchedules />
    <CardWithSchedules />
    <CardWithSchedules />
    <CardWithSchedules />
    <CardWithSchedules />
 </div>
</ContainerSchedules>
  </div>;
 }

export default Schedules;
