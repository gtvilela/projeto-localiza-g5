import React, { FC, useRef, useCallback, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import * as Yup from 'yup';
import {AiOutlineCar} from 'react-icons/ai'

import getValidationErrors from '../../../../../utils/getValidationErrors';
import api from '../../../../../services/api';

import { Modal, Input, Button } from '../../../../../components/global';

interface IBrandProps {
  id: number;
  nome: string;
}

interface IModalNewProps {
  toggle: boolean;
  toggleModal(): void;
  initialData: IBrandProps | null;
  handleCloseModalAfterWinAction(type: 'new' | 'edit', data: IBrandProps): void
}

interface IData {
  nome: string;
}

const ModalNew: FC<IModalNewProps> = ({ toggle, toggleModal, initialData, handleCloseModalAfterWinAction }) => {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current.clearField('nome');
  }, [toggle])

  const handleSubmit = useCallback(
    async (data: IData) => {
      try {
        if (initialData) {
          //await api.put('/marca', data);
          handleCloseModalAfterWinAction('edit', { id: initialData.id, ...data})
        } else {
          const response = await api.post('/marca', data);
          //alterar ...inital data por response.data
          handleCloseModalAfterWinAction('edit', {...initialData})
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
  }, []);

  return (
    <Modal title={`${initialData ? 'Editar' : 'Cadastrar'} Marca`} toggle={toggle} toggleModal={toggleModal}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData} >
        <Input name="nome" label="Nome" icon={AiOutlineCar} />
        <Button type="submit" size="medium">
          {initialData ? 'Editar' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  )
}

export default ModalNew