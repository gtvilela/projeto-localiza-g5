import React, { FC, useCallback, useRef} from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock } from 'react-icons/fi';

<<<<<<< HEAD
import Input from '../../../components/global/Input';
import Button from '../../../components/global/Button';
=======
import Input from '../../global/Input';
import Button from '../../global/Button';
>>>>>>> 6c6db420293032584449b04d4230d674887c792e

const FormPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = useCallback<SubmitHandler>(() => {
    console.log('oi')
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmitForm}>
      <Input
        name="current_password"
        icon={FiLock}
        label="Senha atual"
        type="password"
        />
      <Input
        name="password"
        label="Nova senha"
        icon={FiLock}
        type="password"
      />
      <Input
        name="confirmation_password"
        label="Confirmação da senha"
        icon={FiLock}
        type="password"
      />
      <Button>Confirmar</Button>
    </Form>
  )
}

export default FormPassword;
