import React, { FC, useRef, useCallback } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import Input from '@components/global/Input';
import Button from '@components/global/Button';

const FormProfile: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = useCallback<SubmitHandler>(() => {
    console.log('oi')
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmitForm}>
      <Input
        name="name"
        label="Nome"
        icon={FiUser}
      />
      <Input
        name="email"
        label="E-mail"
        icon={FiMail}
      />
      <Input
        name="cpf"
        label="Cpf"
        icon={FiMail}
      />
      <Input
        name="password"
        label="Senha"
        icon={FiLock}
      />
      <Input
        name="confirmation_password"
        label="Confirmação da senha"
        icon={FiLock}
      />
      <Button>Cadastrar</Button>
    </Form>
  )
}

export default FormProfile
