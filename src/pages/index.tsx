import React from "react";

import Header from '@components/Header/Header'
import { FiUser } from 'react-icons/fi';
import InputCalendario from "@components/InputCalendario/InputCalendario";

export default function Home() {
  return (
    <>
      <Header  hidden={false} />
      <InputCalendario background="#ffffff" color="#000000" iconStart={<FiUser size={14} />} 
          iconEnd={<FiUser size={14} />} label="Input" type="text" />
    </>
  );
}
