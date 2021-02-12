import React, { FC, useRef, useCallback } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import Input from '@components/Input';
import Button from '@components/Button';

const FormProfile: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = useCallback<SubmitHandler>(() => {
    console.log('oi')
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmitForm}>
      <Input
        name="name"
        icon={FiUser}
      />
      <Input
        name="email"
        icon={FiMail}
      />
      <Input
        name="cpf"
        icon={FiMail}
      />
      <Input
        name="password"
        icon={FiLock}
      />
      <Input
        name="confirmation_password"
        icon={FiLock}
      />
      <Button>Cadastrar</Button>
    </Form>
  )
}

export default FormProfile
