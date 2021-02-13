import React, { useRef } from 'react';

import Header from '@components/global/Header/Header';
import Input from '@components/global/Input';

import { Content } from '@styles/pages/dashboard';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiUser } from 'react-icons/fi';

const Dashboard = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Header hidden={true} />
      <Content>
        <Form ref={formRef} onSubmit={() => {}}>
          <Input name="name" icon={FiUser} placeholder="Usuário" />
        </Form>
      </Content>
    </>
  );
};

export default Dashboard;
