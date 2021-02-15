import React from "react";

import { FiUser } from 'react-icons/fi';
import { Content, BoxCards } from '@styles/pages/dashboard';
import Header from "@components/global/Header/Header";
import InputCalendario from "@components/InputCalendario/InputCalendario";

const Dashboard = () => {
  return (
    <>
      <Header  hidden={false} />
      <InputCalendario background="#ffffff" color="#000000" iconStart={<FiUser size={14} />} 
          iconEnd={<FiUser size={14} />} label="Input" type="text" />
    </>
  );
}

export default Dashboard
