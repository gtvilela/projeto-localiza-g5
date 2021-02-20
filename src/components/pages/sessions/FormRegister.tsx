import React, { FC, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiCreditCard, FiLock } from 'react-icons/fi';

import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';

import Input from '../../global/Input';
import Button from '../../global/Button';

const FormProfile: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitForm = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome é obrigatório'),
          documento: Yup.string().required('Cpf é obrigatório'),
          senha: Yup.string().required('Senha é obrigatória'),
          confirmacao_senha: Yup.string().oneOf([Yup.ref('password'), null], 'Senha não são iguais')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/usuario', data);

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
        name="nome"
        label="Nome"
        icon={FiUser}
      />
      <Input
        name="documento"
        label="Cpf"
        icon={FiCreditCard}
      />
      <Input
        name="senha"
        label="Senha"
        icon={FiLock}
      />
      <Input
        name="confirmacao_senha"
        label="Confirmação da senha"
        icon={FiLock}
      />
      <Button type="submit" fullwidth>Cadastrar</Button>
    </Form>
  )
}

export default FormProfile
