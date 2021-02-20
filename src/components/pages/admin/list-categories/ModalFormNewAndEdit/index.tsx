import React, { FC, useRef, useCallback, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import * as Yup from 'yup';
import {AiOutlineCar} from 'react-icons/ai'

import getValidationErrors from '../../../../../utils/getValidationErrors';
import api from '../../../../../services/api';

import { Modal, Input, Button } from '../../../../../components/global';

interface ICategoryProps {
  id: number;
  nome: string;
  url: string;
  descricao: string;
}

interface IModalFormNewAndEditProps {
  toggle: boolean;
  toggleModal(): void;
  initialData: ICategoryProps | null;
  handleCloseModalAfterWinAction(type: 'new' | 'edit', data: ICategoryProps): void
}

interface IData {
  nome: string;
  url: string;
  descricao: string;
}

const ModalFormNewAndEdit: FC<IModalFormNewAndEditProps> = ({ toggle, toggleModal, initialData, handleCloseModalAfterWinAction }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IData) => {
      try {
        if (initialData) {
          await api.put(`categoria/${initialData.id}`, data);
          handleCloseModalAfterWinAction('edit', { id: initialData.id, ...data})
        } else {
          const response = await api.post('api/categoria', data);
          handleCloseModalAfterWinAction('new', response.data)
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
  }, [initialData]);

  return (
    <Modal title={`${initialData ? 'Editar' : 'Cadastrar'} Categoria`} toggle={toggle} toggleModal={toggleModal}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData} >
        <Input name="nome" label="Nome" icon={AiOutlineCar} />
        <Input name="url" label="Url da imagem" icon={AiOutlineCar} />
        <Input name="descricao" label="Descrição" icon={AiOutlineCar} />
        <Button type="submit" size="medium">
          {initialData ? 'Editar' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  )
}

export default ModalFormNewAndEdit
