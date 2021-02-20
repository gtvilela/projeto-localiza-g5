import React, { FC, useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiCreditCard, FiLock } from 'react-icons/fi';

import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

import { Modal, Button, Input } from '../../global'

const FormProfile: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmitForm = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome é obrigatório'),
          documento: Yup.string().required('Cpf é obrigatório'),
          senha: Yup.string().required('Senha é obrigatória'),
          confirmacao_senha: Yup.string().oneOf([Yup.ref('senha'), null], 'Senha não são iguais')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('api/usuario', data);

        formRef.current?.reset();

        setModalIsOpen(true);

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setModalIsOpen(false)

          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
  }, [])

  return (
    <>
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
          type="password"
          icon={FiLock}
        />
        <Input
          name="confirmacao_senha"
          type="password"
          label="Confirmação da senha"
          icon={FiLock}
        />
        <Button type="submit" fullwidth>Cadastrar</Button>
      </Form>
      <Modal
        title="Cadastro realizado com sucesso"
        toggle={modalIsOpen}
        toggleModal={() => setModalIsOpen(false)}
      >
        <p style={{marginBottom: 32}}>
          Obrigado pro se cadastrar em nosso site!
          Em breve você começará a receber nossas
          mensagens e ficará mais atualizado sobre promoções da Localiza.
        </p>
        <Button
          onClick={() => setModalIsOpen(false)}
          size="medium"
          style={{marginLeft: 'auto'}}
        >
          Confirmar
        </Button>
      </Modal>
    </>
  )
}

export default FormProfile
