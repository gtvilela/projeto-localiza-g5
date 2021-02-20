import React, { FC, useCallback, useRef} from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiCreditCard, FiLock } from 'react-icons/fi';

import Input from '../../global/Input';
import Button from '../../global/Button';

import getValidationErrors from '../../../utils/getValidationErrors';
import { useAuth } from '../../../context/auth';

const FormPassword: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmitForm = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          documento: Yup.string().required('Cpf é obrigatório'),
          senha: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          login: data.login,
          senha: data.senha
        })

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmitForm}>
      <Input
        name="login"
        label="Cpf"
        icon={FiCreditCard}
      />
      <Input
        name="senha"
        icon={FiLock}
        label="Senha"
        type="password"
      />
      <Button type="submit" fullwidth>Entrar</Button>
    </Form>
  )
}

export default FormPassword;
